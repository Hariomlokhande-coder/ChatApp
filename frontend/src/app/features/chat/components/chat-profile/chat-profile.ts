import { Component, Input, Output, EventEmitter, inject, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { GroupService } from '../../../../core/services/group';

@Component({
  selector: 'app-chat-profile',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './chat-profile.html',
  styleUrls: ['./chat-profile.css'],
})
export class ChatProfile implements OnChanges {
  @Input() selectedChat: any = null;
  @Output() close = new EventEmitter<void>();

  private groupService = inject(GroupService);

  groupDetails: any = null;
  isLoading = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedChat'] && this.selectedChat) {
      this.groupDetails = null;
      if (this.selectedChat.groupId || this.selectedChat.type === 'group') {
        this.loadGroupDetails();
      }
    }
  }

  loadGroupDetails() {
    const groupId = this.selectedChat.groupId || this.selectedChat.userId;
    if (!groupId) return;

    this.isLoading = true;
    this.groupService.getGroupDetails(groupId).subscribe({
      next: (details) => {
        this.groupDetails = details;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load group details:', err);
        this.isLoading = false;
      }
    });
  }
}
