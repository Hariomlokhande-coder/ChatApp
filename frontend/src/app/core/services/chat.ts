import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MessageResponse, PaginatedResult } from '../models/chat.models';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getMessages(otherUserId: string, page = 1, pageSize = 20): Observable<PaginatedResult<MessageResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<PaginatedResult<MessageResponse>>(`${this.apiUrl}/chat/private/${otherUserId}`, { params });
  }

  getGroupMessages(groupId: string, page = 1, pageSize = 20): Observable<PaginatedResult<MessageResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<PaginatedResult<MessageResponse>>(`${this.apiUrl}/chat/group/${groupId}`, { params });
  }
}
