export interface UserResponse {
  userId: string;
  username: string;
  email: string;
  profilePictureUrl?: string;
  isOnline: boolean;
  lastSeen?: string;
}

export interface UserStatusUpdate {
  userId: string;
  isOnline: boolean;
  lastSeen?: string;
}

export interface UpdateProfileRequest {
  username?: string;
  profilePictureUrl?: string;
}
