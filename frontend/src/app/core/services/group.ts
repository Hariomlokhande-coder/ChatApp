import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GroupResponse } from '../models/chat.models';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getGroups(): Observable<GroupResponse[]> {
    return this.http.get<GroupResponse[]>(`${this.apiUrl}/groups`);
  }

  createGroup(data: any): Observable<GroupResponse> {
    return this.http.post<GroupResponse>(`${this.apiUrl}/groups`, data);
  }

  addGroupMember(groupId: string, userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/groups/${groupId}/members`, { userId });
  }

  getGroupDetails(groupId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/groups/${groupId}`);
  }
}
