import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login/login').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/pages/register/register').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'chat',
        loadComponent: () => import('./features/chat/pages/chat/chat').then(m => m.ChatComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'chat'
  }
];
