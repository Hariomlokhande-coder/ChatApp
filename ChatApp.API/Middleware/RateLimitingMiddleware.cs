using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.API.Middleware
{
    /// <summary>
    /// Rate limiting middleware to protect API endpoints from abuse
    /// Implements token bucket algorithm
    /// </summary>
    public class RateLimitingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<RateLimitingMiddleware> _logger;
        private readonly RateLimitConfig _config;

        // Client identifier -> Request timestamps
        private static readonly ConcurrentDictionary<string, RateLimitBucket> _buckets = new();

        public RateLimitingMiddleware(RequestDelegate next, ILogger<RateLimitingMiddleware> logger, RateLimitConfig config)
        {
            _next = next;
            _logger = logger;
            _config = config;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Skip rate limiting for health checks and swagger
            if (context.Request.Path.StartsWithSegments("/health") ||
                context.Request.Path.StartsWithSegments("/swagger"))
            {
                await _next(context);
                return;
            }

            var clientId = GetClientIdentifier(context);
            var bucket = _buckets.GetOrAdd(clientId, _ => new RateLimitBucket(_config.RequestsPerMinute, _config.WindowSizeSeconds));

            if (!bucket.TryConsumeToken())
            {
                _logger.LogWarning("[RateLimit] Client {ClientId} exceeded rate limit", clientId);

                context.Response.StatusCode = StatusCodes.Status429TooManyRequests;
                context.Response.ContentType = "application/json";
                
                var retryAfter = bucket.GetRetryAfterSeconds();
                context.Response.Headers.Add("Retry-After", retryAfter.ToString());

                await context.Response.WriteAsJsonAsync(new
                {
                    error = "Rate limit exceeded",
                    retryAfter = retryAfter,
                    message = $"Too many requests. Please retry after {retryAfter} seconds."
                });

                return;
            }

            await _next(context);
        }

        private string GetClientIdentifier(HttpContext context)
        {
            // Try to get user ID if authenticated
            var userId = context.User?.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            if (!string.IsNullOrEmpty(userId))
                return $"user:{userId}";

            // Fall back to IP address
            var remoteIp = context.Connection.RemoteIpAddress?.ToString();
            return $"ip:{remoteIp}";
        }
    }

    /// <summary>
    /// Configuration for rate limiting
    /// </summary>
    public class RateLimitConfig
    {
        public int RequestsPerMinute { get; set; } = 60;
        public int WindowSizeSeconds { get; set; } = 60;
    }

    /// <summary>
    /// Token bucket for rate limiting
    /// </summary>
    public class RateLimitBucket
    {
        private readonly int _capacity;
        private readonly int _windowSizeSeconds;
        private readonly Queue<DateTime> _requests;
        private readonly object _lock = new();

        public RateLimitBucket(int capacity, int windowSizeSeconds)
        {
            _capacity = capacity;
            _windowSizeSeconds = windowSizeSeconds;
            _requests = new Queue<DateTime>();
        }

        public bool TryConsumeToken()
        {
            lock (_lock)
            {
                var now = DateTime.UtcNow;
                var windowStart = now.AddSeconds(-_windowSizeSeconds);

                // Remove old requests outside the window
                while (_requests.Count > 0 && _requests.Peek() < windowStart)
                {
                    _requests.Dequeue();
                }

                // Check if we can accept more requests
                if (_requests.Count < _capacity)
                {
                    _requests.Enqueue(now);
                    return true;
                }

                return false;
            }
        }

        public int GetRetryAfterSeconds()
        {
            lock (_lock)
            {
                if (_requests.Count == 0)
                    return 0;

                var oldestRequest = _requests.Peek();
                var retryAfter = (int)Math.Ceiling((oldestRequest.AddSeconds(_windowSizeSeconds) - DateTime.UtcNow).TotalSeconds);
                return Math.Max(1, retryAfter);
            }
        }
    }

    /// <summary>
    /// Extension method to add rate limiting middleware
    /// </summary>
    public static class RateLimitingExtensions
    {
        public static IApplicationBuilder UseRateLimiting(this IApplicationBuilder app, int requestsPerMinute = 60, int windowSizeSeconds = 60)
        {
            var config = new RateLimitConfig
            {
                RequestsPerMinute = requestsPerMinute,
                WindowSizeSeconds = windowSizeSeconds
            };

            return app.UseMiddleware<RateLimitingMiddleware>(config);
        }
    }
}
