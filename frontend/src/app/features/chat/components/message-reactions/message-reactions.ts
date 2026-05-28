import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-reactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-reactions.html',
  styleUrls: ['./message-reactions.css']
})
export class MessageReactionsComponent {
  @Output() selectEmoji = new EventEmitter<string>();

  emojis = ['👍', '❤️', '😂', '😮', '😢', '🙏'];
}
