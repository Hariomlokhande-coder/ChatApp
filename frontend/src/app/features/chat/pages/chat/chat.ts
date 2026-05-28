import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSidebar } from '../../components/chat-sidebar/chat-sidebar';
import { ChatWindow } from '../../components/chat-window/chat-window';
import { ChatProfile } from '../../components/chat-profile/chat-profile';
import { ChatStateService } from '../../../../core/services/chat-state';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ChatSidebar,
    ChatWindow,
    ChatProfile
  ],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
  host: {
    'style': 'display: flex; flex-direction: column; flex: 1; min-height: 0; height: 100%;'
  }
})
export class ChatComponent implements OnInit, OnDestroy {
  chatState = inject(ChatStateService);
  authService = inject(AuthService);

  // Expose signals directly to the presentation components
  users = this.chatState.users;
  groups = this.chatState.groups;
  messages = this.chatState.messages;
  selectedChat = this.chatState.selectedChat;
  unreadCounts = this.chatState.unreadCounts;
  typingUser = this.chatState.typingUser;
  hasMoreMessages = this.chatState.hasMoreMessages;
  currentUserId = this.authService.currentUser()?.userId;

  // Presentational tab states
  activeTab = signal<'chats' | 'channels'>('chats');
  showProfile = signal(false);

  ngOnInit() {
    this.chatState.init();
  }

  ngOnDestroy() {
    this.chatState.destroy();
  }

  selectUser(user: any) {
    this.chatState.selectUser(user);
    this.showProfile.set(false);
  }

  selectGroup(group: any) {
    this.chatState.selectGroup(group);
    this.showProfile.set(false);
  }

  sendMessage(text: string) {
    this.chatState.sendMessage(text);
  }

  onTyping() {
    this.chatState.onTyping();
  }

  loadMoreHistory() {
    this.chatState.loadMoreHistory();
  }

  closeChat() {
    this.chatState.closeChat();
  }

  toggleProfile() {
    this.showProfile.update(val => !val);
  }

  addReaction(data: { messageId: string, emoji: string }) {
    this.chatState.addReaction(data.messageId, data.emoji);
  }

  startVideoCall() {
    console.log('Video call features coordinated through layout overlay.');
  }

  startAudioCall() {
    console.log('Audio call features coordinated through layout overlay.');
  }
}
