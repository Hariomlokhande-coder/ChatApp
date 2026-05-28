import { Injectable, signal, computed, inject } from '@angular/core';
import { UserService } from './user';
import { ChatService } from './chat';
import { GroupService } from './group';
import { AuthService } from './auth';
import { SignalrService } from './signalr';
import { UserResponse } from '../models/user.models';
import { GroupResponse, MessageResponse } from '../models/chat.models';
import { Subscription, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatStateService {
  private userService = inject(UserService);
  private chatService = inject(ChatService);
  private groupService = inject(GroupService);
  private authService = inject(AuthService);
  private signalrService = inject(SignalrService);

  // Reactive State Signals
  users = signal<UserResponse[]>([]);
  groups = signal<GroupResponse[]>([]);
  messages = signal<MessageResponse[]>([]);
  selectedChat = signal<any>(null);
  unreadCounts = signal<Record<string, number>>({});
  typingUser = signal<string | null>(null);

  // Pagination Signals
  currentPage = signal(1);
  totalMessages = signal(0);
  hasMoreMessages = computed(() => this.messages().length < this.totalMessages());

  private typingTimeout?: any;
  private subscriptions = new Subscription();

  /**
   * Initializes the state registry by pulling cache and subscribing to active real-time hub endpoints.
   */
  init() {
    this.subscriptions = new Subscription();
    this.signalrService.startConnection();
    this.loadUsers();
    this.loadGroups();
    this.registerSignalRHandlers();
  }

  /**
   * Destroys active subscriptions and dynamic timeouts to prevent background memory leaks.
   */
  destroy() {
    this.subscriptions.unsubscribe();
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = undefined;
    }
  }

  closeChat() {
    this.selectedChat.set(null);
  }

  loadUsers() {
    const currentUserId = this.authService.currentUser()?.userId;
    this.userService.getUsers().subscribe(users => {
      this.users.set(users.filter(u => u.userId !== currentUserId));
    });
  }

  loadGroups() {
    this.groupService.getGroups().subscribe(groups => {
      this.groups.set(groups);
    });
  }

  registerSignalRHandlers() {
    const currentUserId = this.authService.currentUser()?.userId;

    this.subscriptions.add(
      this.signalrService.messageReceived$.subscribe(msg => {
        const selected = this.selectedChat();
        if (selected && (
          (selected.userId && (msg.senderId === selected.userId || msg.receiverId === selected.userId)) ||
          (selected.groupId && msg.groupId === selected.groupId)
        )) {
          this.messages.update(msgs => {
            const alreadyExists = msgs.some(m => 
              m.messageId === msg.messageId || 
              (msg.requestId && m.requestId === msg.requestId)
            );
            
            if (alreadyExists) {
              return msgs.map(m => 
                (m.messageId === msg.messageId || (msg.requestId && m.requestId === msg.requestId)) 
                ? { ...m, ...msg } : m
              );
            }
            
            return [...msgs, msg];
          });
          
          if (msg.senderId !== currentUserId) {
            this.markCurrentChatRead();
          }
        } else if (msg.senderId !== currentUserId) {
          const id = msg.groupId || msg.senderId;
          this.unreadCounts.update(counts => ({
            ...counts,
            [id]: (counts[id] || 0) + 1
          }));
        }
      })
    );

    this.subscriptions.add(
      this.signalrService.typing$.subscribe(data => {
        const selected = this.selectedChat();
        if (!selected) return;

        const typingId = data.userId || data.UserId;
        const typingName = data.username || data.Username;
        const groupId = data.groupId || data.GroupId;

        if (groupId) {
          // Group chat typing
          if (selected.groupId === groupId && typingId !== this.authService.currentUser()?.userId) {
            this.typingUser.set(data.stopped ? null : (typingName || 'Someone'));
          }
        } else {
          // Private chat typing
          if (selected.userId === typingId) {
            this.typingUser.set(data.stopped ? null : (typingName || 'Someone'));
          }
        }
      })
    );

    this.subscriptions.add(
      this.signalrService.messageStatusChanged$.subscribe(data => {
        this.messages.update(msgs => msgs.map(m => 
          m.messageId === data.messageId ? { ...m, deliveryStatus: data.status } : m
        ));
      })
    );

    this.subscriptions.add(
      this.signalrService.userStatusChanged$.subscribe(data => {
        this.users.update(users => users.map(u => 
          u.userId === data.userId ? { ...u, isOnline: data.isOnline } : u
        ));

        const selected = this.selectedChat();
        if (selected && selected.userId === data.userId) {
          this.selectedChat.set({ ...selected, isOnline: data.isOnline });
        }
      })
    );
  }

  selectUser(user: UserResponse) {
    this.selectedChat.set({ ...user, type: 'user' });
    this.typingUser.set(null);
    this.loadMessages(user.userId);
    
    this.unreadCounts.update(counts => {
      const newCounts = { ...counts };
      delete newCounts[user.userId];
      return newCounts;
    });
  }

  selectGroup(group: GroupResponse) {
    this.selectedChat.set({ ...group, type: 'group' });
    this.typingUser.set(null);
    this.loadMessages(undefined, group.groupId);

    this.unreadCounts.update(counts => {
      const newCounts = { ...counts };
      delete newCounts[group.groupId];
      return newCounts;
    });
  }

  markCurrentChatRead() {
    const currentUserId = this.authService.currentUser()?.userId;
    const unreadIds = this.messages()
      .filter(m => m.senderId !== currentUserId && m.deliveryStatus < 2)
      .map(m => m.messageId);

    if (unreadIds.length > 0) {
      from(this.signalrService.markMessagesRead(unreadIds)).subscribe();
    }
  }

  loadMessages(userId?: string, groupId?: string) {
    this.currentPage.set(1);
    if (groupId) {
      this.chatService.getGroupMessages(groupId, 1, 50).subscribe(res => {
        this.messages.set(res.items || []);
        this.totalMessages.set(res.totalCount || 0);
        this.markCurrentChatRead();
      });
    } else if (userId) {
      this.chatService.getMessages(userId, 1, 50).subscribe(res => {
        this.messages.set(res.items || []);
        this.totalMessages.set(res.totalCount || 0);
        this.markCurrentChatRead();
      });
    }
  }

  loadMoreHistory() {
    const selected = this.selectedChat();
    if (!selected) return;

    const nextPage = this.currentPage() + 1;
    if (selected.groupId) {
      this.chatService.getGroupMessages(selected.groupId, nextPage, 50).subscribe(res => {
        if (res.items && res.items.length > 0) {
          this.messages.update(msgs => [...res.items, ...msgs]);
          this.currentPage.set(nextPage);
        }
      });
    } else if (selected.userId) {
      this.chatService.getMessages(selected.userId, nextPage, 50).subscribe(res => {
        if (res.items && res.items.length > 0) {
          this.messages.update(msgs => [...res.items, ...msgs]);
          this.currentPage.set(nextPage);
        }
      });
    }
  }

  sendMessage(text: string) {
    const selected = this.selectedChat();
    const currentUserId = this.authService.currentUser()?.userId;
    const currentUser = this.authService.currentUser();
    if (!text || !selected || !currentUserId) return;

    const requestId = crypto.randomUUID();

    const tempMsg: MessageResponse = {
      messageId: requestId,
      requestId: requestId,
      content: text,
      senderId: currentUserId,
      senderName: currentUser?.username || 'Me',
      receiverId: selected.userId,
      groupId: selected.groupId,
      createdAt: new Date().toISOString(),
      deliveryStatus: 0,
      messageType: 'text',
      isEdited: false
    };

    this.messages.update(msgs => [...msgs, tempMsg]);

    this.signalrService.sendMessage(requestId, text, selected.userId, selected.groupId).subscribe({
      error: () => {
        console.error('Failed to send message');
      }
    });
  }

  onTyping() {
    const selected = this.selectedChat();
    if (!selected) return;

    const isGroup = !!selected.groupId;
    const targetId = isGroup ? selected.groupId : selected.userId;
    if (!targetId) return;

    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    } else {
      from(this.signalrService.sendTyping(targetId, isGroup)).subscribe();
    }

    this.typingTimeout = setTimeout(() => {
      from(this.signalrService.stopTyping(targetId, isGroup)).subscribe();
      this.typingTimeout = undefined;
    }, 2000);
  }

  addReaction(messageId: string, emoji: string) {
    this.messages.update(msgs => msgs.map(m => {
      if (m.messageId === messageId) {
        const reactions = m.reactions || [];
        const updatedReactions = reactions.includes(emoji)
          ? reactions.filter(r => r !== emoji)
          : [...reactions, emoji];
        return { ...m, reactions: updatedReactions };
      }
      return m;
    }));
  }
}
