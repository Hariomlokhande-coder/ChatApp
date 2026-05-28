import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth';
import { ChatStateService } from '../../core/services/chat-state';
import { ProfileSettingsComponent } from '../../features/chat/components/profile-settings/profile-settings';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    ProfileSettingsComponent
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayoutComponent {
  authService = inject(AuthService);
  chatState = inject(ChatStateService);
  currentUser = this.authService.currentUser;
  isChatSelected = this.chatState.selectedChat;
  isProfileSettingsOpen = false;

  logout() {
    this.authService.logout();
  }
}
