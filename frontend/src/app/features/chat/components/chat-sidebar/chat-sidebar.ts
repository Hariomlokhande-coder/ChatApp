import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UserResponse } from '../../../../core/models/user.models';
import { GroupResponse } from '../../../../core/models/chat.models';

@Component({
  selector: 'app-chat-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './chat-sidebar.html',
  styleUrls: ['./chat-sidebar.css'],
})
export class ChatSidebar {
  @Input() users: UserResponse[] = [];
  @Input() groups: GroupResponse[] = [];
  @Input() activeTab: 'chats' | 'channels' = 'chats';
  @Input() selectedChat: any = null;
  @Input() unreadCounts: Record<string, number> = {};

  @Output() tabChange = new EventEmitter<'chats' | 'channels'>();
  @Output() userSelected = new EventEmitter<UserResponse>();
  @Output() groupSelected = new EventEmitter<GroupResponse>();

  searchQuery = '';

  get filteredUsers(): UserResponse[] {
    if (!this.searchQuery.trim()) {
      return this.users;
    }
    const q = this.searchQuery.toLowerCase().trim();
    return this.users.filter(u => u.username.toLowerCase().includes(q));
  }

  get filteredGroups(): GroupResponse[] {
    if (!this.searchQuery.trim()) {
      return this.groups;
    }
    const q = this.searchQuery.toLowerCase().trim();
    return this.groups.filter(g => g.name.toLowerCase().includes(q));
  }

  setTab(tab: 'chats' | 'channels') {
    this.tabChange.emit(tab);
  }

  selectUser(user: UserResponse) {
    this.userSelected.emit(user);
  }

  selectGroup(group: GroupResponse) {
    this.groupSelected.emit(group);
  }
}
