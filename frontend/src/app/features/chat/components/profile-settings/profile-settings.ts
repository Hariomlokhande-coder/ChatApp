import { Component, Input, Output, EventEmitter, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../../../core/services/user';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './profile-settings.html',
  styleUrls: ['./profile-settings.css']
})
export class ProfileSettingsComponent {
  private userService = inject(UserService);
  private authService = inject(AuthService);

  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  currentUser = this.authService.currentUser;
  
  username = signal('');
  avatarUrl = signal('');
  isSaving = signal(false);
  successMsg = signal('');

  // 6 Premium illustrative avatar presets from DiceBear
  avatars = [
    'https://api.dicebear.com/7.x/adventurer/svg?seed=Felix',
    'https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/adventurer/svg?seed=Jack',
    'https://api.dicebear.com/7.x/adventurer/svg?seed=Nala',
    'https://api.dicebear.com/7.x/adventurer/svg?seed=Buster',
    'https://api.dicebear.com/7.x/adventurer/svg?seed=Cookie'
  ];

  ngOnChanges() {
    const user = this.currentUser();
    if (user) {
      this.username.set(user.username);
      this.avatarUrl.set(user.profilePictureUrl || this.avatars[0]);
    }
  }

  selectAvatar(url: string) {
    this.avatarUrl.set(url);
  }

  save() {
    if (!this.username().trim()) return;

    this.isSaving.set(true);
    this.successMsg.set('');

    this.userService.updateProfile({
      username: this.username().trim(),
      profilePictureUrl: this.avatarUrl()
    }).subscribe({
      next: (updatedUser) => {
        this.isSaving.set(false);
        this.successMsg.set('Profile updated successfully!');
        
        // Update user state globally in AuthService
        this.authService.updateCurrentUser({
          ...this.authService.currentUser()!,
          username: updatedUser.username,
          profilePictureUrl: updatedUser.profilePictureUrl
        });

        setTimeout(() => {
          this.successMsg.set('');
          this.close.emit();
        }, 1500);
      },
      error: () => {
        this.isSaving.set(false);
      }
    });
  }
}
