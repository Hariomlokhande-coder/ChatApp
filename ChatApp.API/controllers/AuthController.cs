using Microsoft.AspNetCore.Mvc;
using ChatApp.Infrastructure.Data;
using ChatApp.Domain.Entities;
using ChatApp.Application.DTOs;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _environment;

        public AuthController(AppDbContext context, IConfiguration configuration, IWebHostEnvironment environment)
        {
            _context = context;
            _configuration = configuration;
            _environment = environment;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Email))
                return BadRequest(new { message = "Email is required" });

            if (string.IsNullOrWhiteSpace(request.Password))
                return BadRequest(new { message = "Password is required" });

            if (string.IsNullOrWhiteSpace(request.Username))
                return BadRequest(new { message = "Username is required" });

            var security = _configuration.GetSection("Security");
            var minLen = security.GetValue<int>("MinPasswordLength", 6);
            if (request.Password.Length < minLen)
                return BadRequest(new { message = $"Password must be at least {minLen} characters" });

            if (security.GetValue<bool>("RequireUppercase", true) && !request.Password.Any(char.IsUpper))
                return BadRequest(new { message = "Password must contain at least one uppercase letter" });

            if (security.GetValue<bool>("RequireLowercase", true) && !request.Password.Any(char.IsLower))
                return BadRequest(new { message = "Password must contain at least one lowercase letter" });

            if (security.GetValue<bool>("RequireDigit", true) && !request.Password.Any(char.IsDigit))
                return BadRequest(new { message = "Password must contain at least one number (0-9)" });

            if (security.GetValue<bool>("RequireSpecialCharacter", true) && !request.Password.Any(ch => !char.IsLetterOrDigit(ch)))
                return BadRequest(new { message = "Password must contain at least one special character (e.g. !@$#%&)" });

            // Check email format
            if (!request.Email.Contains('@'))
                return BadRequest(new { message = "Invalid email format" });

            if (await _context.Users.AnyAsync(x => x.Email == request.Email))
                return BadRequest(new { message = "Email already exists" });

            if (await _context.Users.AnyAsync(x => x.Username == request.Username))
                return BadRequest(new { message = "Username already exists" });

            var user = new User
            {
                UserId = Guid.NewGuid(),
                Username = request.Username.Trim(),
                Email = request.Email.Trim().ToLower(),
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                ProfilePictureUrl = request.ProfilePictureUrl,
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "User registered successfully",
                userId = user.UserId,
                username = user.Username
            });
        }

       
        /// 🔥 LOGIN - Authenticate and get JWT token
       
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
                return BadRequest(new { message = "Email and password are required" });

            var user = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == request.Email.Trim().ToLower());

            if (user == null)
                return Unauthorized(new { message = "Invalid email or password" });

            if (!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                return Unauthorized(new { message = "Invalid email or password" });

            // 🔥 JWT TOKEN GENERATION
            var jwtSettings = _configuration.GetSection("Jwt");

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtSettings["Key"]!));

            var durationMinutes = int.TryParse(jwtSettings["DurationInMinutes"], out var d) ? d : 60;

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(durationMinutes),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            // 🔥 REFRESH TOKEN GENERATION
            var refreshTokenString = GenerateRefreshToken();
            var refreshToken = new RefreshToken
            {
                RefreshTokenId = Guid.NewGuid(),
                UserId = user.UserId,
                Token = refreshTokenString,
                ExpiresAt = DateTime.UtcNow.AddDays(7), // 7 day refresh token
                CreatedAt = DateTime.UtcNow
            };

            _context.RefreshTokens.Add(refreshToken);

            // 🍪 SET SECURE HTTP-ONLY COOKIE (Simplified for local testing)
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = !_environment.IsDevelopment(), // HTTPS in production only
                SameSite = SameSiteMode.Lax, 
                Expires = DateTime.UtcNow.AddMinutes(durationMinutes),
                Path = "/"
            };

            Response.Cookies.Append("chat_token", tokenString, cookieOptions);

            // 🔥 SESSION SET (Same browser tabs k liye)
            HttpContext.Session.SetString("UserId", user.UserId.ToString());

            // Update last seen
            user.LastSeen = DateTime.UtcNow;
            user.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return Ok(new LoginResponse
            {
                Token = tokenString, // Keeping for compatibility, but frontend should prefer cookie
                RefreshToken = refreshTokenString,
                UserId = user.UserId,
                Username = user.Username,
                Email = user.Email,
                ProfilePictureUrl = user.ProfilePictureUrl
            });
        }

        /// <summary>
        /// 🚪 LOGOUT - Clear the authentication cookie
        /// </summary>
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("chat_token");
            HttpContext.Session.Clear(); // 🔥 SESSION CLEAR (Logout hone par)
            return Ok(new { message = "Logged out successfully" });
        }

        /// <summary>
        /// 🔍 Verify token validity
        /// </summary>
        [HttpGet("verify")]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public IActionResult VerifyToken()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var username = User.FindFirst(ClaimTypes.Name)?.Value;
            var email = User.FindFirst(ClaimTypes.Email)?.Value;

            return Ok(new
            {
                valid = true,
                userId,
                username,
                email
            });
        }

        /// <summary>
        /// 🔄 REFRESH TOKEN - Get new access token using refresh token
        /// </summary>
        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.RefreshToken))
                return BadRequest(new { message = "Refresh token is required" });

            var refreshToken = await _context.RefreshTokens
                .Include(rt => rt.User)
                .FirstOrDefaultAsync(rt => rt.Token == request.RefreshToken);

            if (refreshToken == null || refreshToken.IsExpired || refreshToken.IsRevoked)
                return Unauthorized(new { message = "Invalid or expired refresh token" });

            var user = refreshToken.User;
            if (user == null || user.IsDeleted)
                return Unauthorized(new { message = "User not found" });

            // 🔥 GENERATE NEW ACCESS TOKEN
            var jwtSettings = _configuration.GetSection("Jwt");
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!));
            var durationMinutes = int.TryParse(jwtSettings["DurationInMinutes"], out var d) ? d : 60;

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(durationMinutes),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            // 🔥 OPTIONALLY GENERATE NEW REFRESH TOKEN (Token rotation for better security)
            var newRefreshTokenString = GenerateRefreshToken();
            var newRefreshToken = new RefreshToken
            {
                RefreshTokenId = Guid.NewGuid(),
                UserId = user.UserId,
                Token = newRefreshTokenString,
                ExpiresAt = DateTime.UtcNow.AddDays(7),
                CreatedAt = DateTime.UtcNow
            };

            _context.RefreshTokens.Add(newRefreshToken);

            // Optionally revoke old refresh token for better security (token rotation)
            // refreshToken.RevokedAt = DateTime.UtcNow;
            // refreshToken.RevokeReason = "Token rotated";

            await _context.SaveChangesAsync();

            // Update cookie
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = !_environment.IsDevelopment(), // HTTPS in production only
                SameSite = SameSiteMode.Lax,
                Expires = DateTime.UtcNow.AddMinutes(durationMinutes),
                Path = "/"
            };

            Response.Cookies.Append("chat_token", tokenString, cookieOptions);

            return Ok(new RefreshTokenResponse
            {
                AccessToken = tokenString,
                RefreshToken = newRefreshTokenString,
                ExpiresInSeconds = durationMinutes * 60
            });
        }

        /// <summary>
        /// 🚫 REVOKE TOKEN - Invalidate a refresh token
        /// </summary>
        [HttpPost("revoke")]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public async Task<IActionResult> RevokeToken([FromBody] RefreshTokenRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.RefreshToken))
                return BadRequest(new { message = "Refresh token is required" });

            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!Guid.TryParse(userId, out var userGuid))
                return Unauthorized(new { message = "Invalid user" });

            var refreshToken = await _context.RefreshTokens
                .FirstOrDefaultAsync(rt => rt.Token == request.RefreshToken && rt.UserId == userGuid);

            if (refreshToken == null)
                return NotFound(new { message = "Refresh token not found" });

            refreshToken.RevokedAt = DateTime.UtcNow;
            refreshToken.RevokeReason = "User requested revocation";

            await _context.SaveChangesAsync();

            return Ok(new { message = "Token revoked successfully" });
        }

        /// <summary>
        /// 🔐 LOGOUT - Clear all refresh tokens for the user
        /// </summary>
        [HttpPost("logout-all")]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public async Task<IActionResult> LogoutAll()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!Guid.TryParse(userId, out var userGuid))
                return Unauthorized(new { message = "Invalid user" });

            // Revoke all active refresh tokens
            var refreshTokens = await _context.RefreshTokens
                .Where(rt => rt.UserId == userGuid && !rt.IsRevoked)
                .ToListAsync();

            foreach (var rt in refreshTokens)
            {
                rt.RevokedAt = DateTime.UtcNow;
                rt.RevokeReason = "Logout from all devices";
            }

            await _context.SaveChangesAsync();

            Response.Cookies.Delete("chat_token");
            HttpContext.Session.Clear();

            return Ok(new { message = "Logged out from all devices successfully" });
        }

        /// <summary>
        /// Helper method to generate a secure random refresh token
        /// </summary>
        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[64];
            using (var rng = System.Security.Cryptography.RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }
    }
}