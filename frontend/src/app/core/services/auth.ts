import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  userId: string;
  username: string;
  email: string;
  profilePictureUrl?: string;
}

export interface LoginResponse {
  token: string;
  refreshToken?: string;
  userId: string;
  username: string;
  email: string;
  profilePictureUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = `${environment.apiUrl}/auth`;

  // State using Signals
  private currentUserSignal = signal<User | null>(this.getUserFromStorage());
  
  currentUser = computed(() => this.currentUserSignal());
  isAuthenticated = computed(() => !!this.currentUserSignal());

  constructor() {
    // Check if token exists on startup
    if (this.getToken()) {
      this.verifyToken().subscribe({
        error: () => this.logout()
      });
    }
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(credentials: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        this.setSession(response);
      })
    );
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => this.clearSession()),
      catchError((err) => {
        this.clearSession();
        return throwError(() => err);
      })
    ).subscribe();
  }

  verifyToken(): Observable<boolean> {
    return this.http.get<any>(`${this.apiUrl}/verify`).pipe(
      map(res => {
        if (res.valid) {
          const user: User = {
            userId: res.userId,
            username: res.username,
            email: res.email
          };
          this.currentUserSignal.set(user);
          sessionStorage.setItem('user', JSON.stringify(user));
          return true;
        }
        return false;
      }),
      catchError((err) => {
        // Only logout on 401/403. Don't logout on network errors.
        if (err.status === 401 || err.status === 403) {
          this.clearSession();
        }
        return [false];
      })
    );
  }

  private setSession(response: LoginResponse) {
    sessionStorage.setItem('chat_token', response.token);
    if (response.refreshToken) {
      sessionStorage.setItem('refresh_token', response.refreshToken);
    }
    const user: User = {
      userId: response.userId,
      username: response.username,
      email: response.email,
      profilePictureUrl: response.profilePictureUrl
    };
    this.currentUserSignal.set(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  private clearSession() {
    sessionStorage.removeItem('chat_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('user');
    this.currentUserSignal.set(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return sessionStorage.getItem('chat_token');
  }

  private getUserFromStorage(): User | null {
    const userJson = sessionStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
  updateCurrentUser(user: User) {
    this.currentUserSignal.set(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
