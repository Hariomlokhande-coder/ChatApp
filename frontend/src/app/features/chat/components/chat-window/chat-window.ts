import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, effect, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageResponse } from '../../../../core/models/chat.models';
import { MessageReactionsComponent } from '../message-reactions/message-reactions';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MessageReactionsComponent],
  templateUrl: './chat-window.html',
  styleUrls: ['./chat-window.css'],
})
export class ChatWindow {
  @Input() selectedChat: any = null;
  @Input() messages: MessageResponse[] = [];
  @Input() currentUserId?: string;
  @Input() typingUser: string | null = null;
  @Input() hasMoreMessages = false;

  @Output() messageSent = new EventEmitter<string>();
  @Output() typing = new EventEmitter<void>();
  @Output() startVideoCall = new EventEmitter<void>();
  @Output() startAudioCall = new EventEmitter<void>();
  @Output() toggleProfile = new EventEmitter<void>();
  @Output() closeChat = new EventEmitter<void>();
  @Output() loadMore = new EventEmitter<void>();
  @Output() reactionAdded = new EventEmitter<{ messageId: string, emoji: string }>();

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  messageText = '';
  activeReactionMessageId: string | null = null;

  @HostListener('document:click')
  closeAllPopovers() {
    this.activeReactionMessageId = null;
  }

  toggleReactionPopover(messageId: string, event: Event) {
    event.stopPropagation();
    this.activeReactionMessageId = this.activeReactionMessageId === messageId ? null : messageId;
  }

  onSelectEmoji(messageId: string, emoji: string) {
    this.reactionAdded.emit({ messageId, emoji });
    this.activeReactionMessageId = null;
  }

  removeReaction(messageId: string, emoji: string, event: Event) {
    event.stopPropagation();
    this.reactionAdded.emit({ messageId, emoji });
  }

  constructor() {
    effect(() => {
      // Need a way to trigger scroll when messages change, but since messages is @Input(), 
      // we can do it in ngOnChanges or use a signal for inputs if we migrate to signal inputs.
      // For now, we'll use a simple setter or ngOnChanges.
    });
  }

  ngOnChanges() {
    setTimeout(() => this.scrollToBottom(), 100);
  }

  onSendMessage() {
    const text = this.messageText.trim();
    if (text) {
      this.messageSent.emit(text);
      this.messageText = '';
    }
  }

  onTyping() {
    this.typing.emit();
  }

  shouldShowDateDivider(index: number): boolean {
    if (!this.messages || this.messages.length === 0) return false;
    if (index === 0) return true;
    const currentDay = this.getFormattedDateKey(this.messages[index].createdAt);
    const previousDay = this.getFormattedDateKey(this.messages[index - 1].createdAt);
    return currentDay !== previousDay;
  }

  getDateDividerText(dateStr: string): string {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (this.isSameDay(date, today)) {
      return 'Today';
    } else if (this.isSameDay(date, yesterday)) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  }

  private getFormattedDateKey(dateStr: string): string {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  private isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  private scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
