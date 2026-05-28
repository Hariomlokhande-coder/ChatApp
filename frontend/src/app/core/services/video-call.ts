import { Injectable, inject, signal } from '@angular/core';
import AgoraRTC, { IAgoraRTCClient, ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';
import { SignalrService } from './signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoCallService {
  private signalrService = inject(SignalrService);
  
  private client?: IAgoraRTCClient;
  private localVideoTrack?: ICameraVideoTrack;
  private localAudioTrack?: IMicrophoneAudioTrack;

  // App ID from Agora Console (placeholder)
  private appId = 'YOUR_AGORA_APP_ID'; 

  callState = signal<'idle' | 'calling' | 'incoming' | 'connected'>('idle');
  remoteUser = signal<any>(null);

  private callEndSource = new Subject<void>();
  callEnd$ = this.callEndSource.asObservable();

  constructor() {
    this.setupSignalrHandlers();
  }

  private setupSignalrHandlers() {
    this.signalrService.callRequested$.subscribe(data => {
      this.remoteUser.set(data);
      this.callState.set('incoming');
    });

    this.signalrService.callAccepted$.subscribe(async () => {
      await this.joinChannel();
      this.callState.set('connected');
    });

    this.signalrService.callRejected$.subscribe(() => {
      this.endCall();
    });
  }

  async startCall(targetId: string, type: 'video' | 'audio') {
    this.callState.set('calling');
    await this.signalrService.startCall(targetId, type);
  }

  async answerCall() {
    const user = this.remoteUser();
    if (user) {
      await this.signalrService.acceptCall(user.userId);
      await this.joinChannel();
      this.callState.set('connected');
    }
  }

  async rejectCall() {
    const user = this.remoteUser();
    if (user) {
      await this.signalrService.rejectCall(user.userId);
      this.endCall();
    }
  }

  private async joinChannel() {
    this.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    
    // In a real app, you'd get a token from your backend
    const uid = await this.client.join(this.appId, 'chat_room', null, null);

    this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    this.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

    await this.client.publish([this.localAudioTrack, this.localVideoTrack]);

    this.localVideoTrack.play('local-player');

    this.client.on('user-published', async (user, mediaType) => {
      await this.client?.subscribe(user, mediaType);
      if (mediaType === 'video') {
        user.videoTrack?.play('remote-player');
      }
      if (mediaType === 'audio') {
        user.audioTrack?.play();
      }
    });
  }

  async endCall() {
    this.localAudioTrack?.close();
    this.localVideoTrack?.close();
    await this.client?.leave();
    this.callState.set('idle');
    this.remoteUser.set(null);
    this.callEndSource.next();
  }

  toggleVideo(enabled: boolean) {
    this.localVideoTrack?.setEnabled(enabled);
  }

  toggleAudio(enabled: boolean) {
    this.localAudioTrack?.setEnabled(enabled);
  }
}
