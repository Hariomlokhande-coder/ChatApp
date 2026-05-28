export interface LoginResponse {
  token: string;
  refreshToken?: string;
  userId: string;
  username: string;
  email: string;
  profilePictureUrl?: string;
}

export interface AuthState {
  user: LoginResponse | null;
  isAuthenticated: boolean;
}
