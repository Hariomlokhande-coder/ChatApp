import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VideoCallService } from '../../../../core/services/video-call';

@Component({
  selector: 'app-call-overlay',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './call-overlay.html',
  styleUrl: './call-overlay.css'
})
export class CallOverlayComponent {
  videoCallService = inject(VideoCallService);
  callState = this.videoCallService.callState;
  remoteUser = this.videoCallService.remoteUser;

  videoEnabled = true;
  audioEnabled = true;

  statusText() {
    switch(this.callState()) {
      case 'calling': return 'Calling...';
      case 'incoming': return 'Incoming Call';
      case 'connected': return 'In Conversation';
      default: return '';
    }
  }

  answer() { this.videoCallService.answerCall(); }
  reject() { this.videoCallService.rejectCall(); }
  end() { this.videoCallService.endCall(); }

  toggleVideo() {
    this.videoEnabled = !this.videoEnabled;
    this.videoCallService.toggleVideo(this.videoEnabled);
  }

  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    this.videoCallService.toggleAudio(this.audioEnabled);
  }
}
