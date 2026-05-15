using System;

namespace ChatApp.Domain.Entities
{
    /// <summary>
    /// RefreshToken entity for implementing secure token refresh mechanism
    /// Allows users to get new access tokens without re-entering credentials
    /// </summary>
    public class RefreshToken
    {
        public Guid RefreshTokenId { get; set; } = Guid.NewGuid();

        public Guid UserId { get; set; }

        public string Token { get; set; } = string.Empty;

        public DateTime ExpiresAt { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? RevokedAt { get; set; }

        public string? RevokeReason { get; set; }

        public bool IsRevoked => RevokedAt.HasValue;

        public bool IsExpired => DateTime.UtcNow > ExpiresAt;

        public bool IsActive => !IsRevoked && !IsExpired;

        // Navigation
        public User? User { get; set; }
    }
}
