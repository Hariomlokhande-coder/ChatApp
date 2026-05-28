import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.apiUrl}/users`);
  }

  getUserProfile(id: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/users/${id}`);
  }

  updateProfile(request: { username?: string, profilePictureUrl?: string }): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.apiUrl}/users/profile`, request);
  }
}
