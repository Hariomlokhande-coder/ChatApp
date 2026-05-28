import { Injectable, inject, signal, effect } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth';
import { Subject } from 'rxjs';
import { MessageResponse, TypingNotification } from '../models/chat.models';
import { UserStatusUpdate } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  private authService = inject(AuthService);
  private hubConnection?: signalR.HubConnection;

  // Connection state signal
  connectionState = signal<signalR.HubConnectionState>(signalR.HubConnectionState.Disconnected);

  // Observable subjects for incoming messages/events
  private messageReceivedSource = new Subject<MessageResponse>();
  messageReceived$ = this.messageReceivedSource.asObservable();

  private userStatusChangedSource = new Subject<UserStatusUpdate>();
  userStatusChanged$ = this.userStatusChangedSource.asObservable();

  private typingSource = new Subject<TypingNotification>();
  typing$ = this.typingSource.asObservable();

  private callRequestedSource = new Subject<any>();
  callRequested$ = this.callRequestedSource.asObservable();

  private callAcceptedSource = new Subject<any>();
  callAccepted$ = this.callAcceptedSource.asObservable();

  private callRejectedSource = new Subject<any>();
  callRejected$ = this.callRejectedSource.asObservable();

  private messageStatusChangedSource = new Subject<{ messageId: string, status: number }>();
  messageStatusChanged$ = this.messageStatusChangedSource.asObservable();

  constructor() {
    effect(() => {
      if (this.authService.isAuthenticated()) {
        console.log('SignalR: User authenticated, starting connection...');
        this.startConnection();
      } else {
        console.log('SignalR: User logged out, stopping connection...');
        this.stopConnection();
      }
    });
  }

  async startConnection() {
    if (this.hubConnection) {
      const state = this.hubConnection.state;
      if (state === signalR.HubConnectionState.Connected ||
        state === signalR.HubConnectionState.Connecting ||
        state === signalR.HubConnectionState.Reconnecting) {
        return;
      }
    }

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.hubUrl, {
        accessTokenFactory: () => this.authService.getToken() || '',
        skipNegotiation: false,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect([0, 2000, 5000, 10000])
      .build();

    this.registerHandlers();

    try {
      console.log('SignalR: Attempting to connect to', environment.hubUrl);
      await this.hubConnection.start();
      this.connectionState.set(this.hubConnection.state);
      console.log('SignalR: Connected successfully!');
      this.syncOffline();
    } catch (err) {
      console.error('SignalR: Connection failed:', err);
      this.connectionState.set(signalR.HubConnectionState.Disconnected);
      setTimeout(() => this.startConnection(), 5000);
    }
  }

  async syncOffline() {
    const lastSync = localStorage.getItem('chat_last_sync');
    if (lastSync && this.hubConnection?.state === signalR.HubConnectionState.Connected) {
      await this.hubConnection.invoke('FetchMissedMessages', lastSync);
    }
    localStorage.setItem('chat_last_sync', new Date().toISOString());
  }

  stopConnection() {
    this.hubConnection?.stop();
  }

  private registerHandlers() {
    if (!this.hubConnection) return;

    this.hubConnection.onreconnecting(() => {
      this.connectionState.set(signalR.HubConnectionState.Reconnecting);
    });

    this.hubConnection.onreconnected(() => {
      this.connectionState.set(signalR.HubConnectionState.Connected);
    });

    this.hubConnection.onclose(() => {
      this.connectionState.set(signalR.HubConnectionState.Disconnected);
    });

    // Chat Events
    this.hubConnection.on('ReceivePrivateMessage', (message) => this.messageReceivedSource.next(message));
    this.hubConnection.on('ReceiveGroupMessage', (message) => this.messageReceivedSource.next(message));
    this.hubConnection.on('MessageSent', (message) => this.messageReceivedSource.next(message));

    // Status Events
    this.hubConnection.on('UserOnline', (data) => {
      const userId = data.userId || data.UserId;
      if (userId) this.userStatusChangedSource.next({ userId, isOnline: true });
    });
    this.hubConnection.on('UserOffline', (data) => {
      const userId = data.userId || data.UserId;
      if (userId) this.userStatusChangedSource.next({ userId, isOnline: false });
    });

    // Typing Events
    this.hubConnection.on('UserTyping', (data) => this.typingSource.next(data));
    this.hubConnection.on('UserStoppedTyping', (data) => this.typingSource.next({ ...data, stopped: true }));

    // Notification & Others
    this.hubConnection.on('AddedToGroup', (data) => {
      // Handle group addition
    });

    this.hubConnection.on('CallRequested', (data) => this.callRequestedSource.next(data));
    this.hubConnection.on('CallAccepted', (data) => this.callAcceptedSource.next(data));
    this.hubConnection.on('CallRejected', (data) => this.callRejectedSource.next(data));

    this.hubConnection.on('MessageDelivered', (data) => {
      this.messageStatusChangedSource.next({ messageId: data.messageId || data.MessageId, status: 1 });
    });

    this.hubConnection.on('MessageRead', (data) => {
      this.messageStatusChangedSource.next({ messageId: data.messageId || data.MessageId, status: 2 });
    });
  }

  async sendPrivateMessage(receiverId: string, content: string) {
    const requestId = crypto.randomUUID();
    return this.hubConnection?.invoke('SendPrivateMessage', { receiverId, content, requestId });
  }

  async sendGroupMessage(groupId: string, content: string) {
    const requestId = crypto.randomUUID();
    return this.hubConnection?.invoke('SendGroupMessage', { groupId, content, requestId });
  }

  async sendTyping(targetId: string, isGroup: boolean) {
    return this.hubConnection?.invoke('SendTyping', targetId, isGroup);
  }

  async stopTyping(targetId: string, isGroup: boolean) {
    return this.hubConnection?.invoke('StopTyping', targetId, isGroup);
  }

  async startCall(targetId: string, type: 'video' | 'audio') {
    return this.hubConnection?.invoke('StartCall', targetId, type);
  }

  async acceptCall(targetId: string) {
    return this.hubConnection?.invoke('AcceptCall', targetId);
  }

  async rejectCall(targetId: string) {
    return this.hubConnection?.invoke('RejectCall', targetId);
  }

  async markDelivered(messageId: string) {
    return this.hubConnection?.invoke('MessageDelivered', messageId);
  }

  async markMessagesRead(messageIds: string[]) {
    if (!messageIds || messageIds.length === 0) return;
    return this.hubConnection?.invoke('MarkMessagesRead', messageIds);
  }

  // Wrapper for component usage
  sendMessage(requestId: string, content: string, receiverId?: string, groupId?: string) {
    if (groupId) {
      return from(this.hubConnection?.invoke('SendGroupMessage', { groupId, content, requestId }) || Promise.resolve());
    }
    return from(this.hubConnection?.invoke('SendPrivateMessage', { receiverId, content, requestId }) || Promise.resolve());
  }
}

import { from } from 'rxjs';
