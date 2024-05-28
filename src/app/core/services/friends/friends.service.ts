import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../../../features/friends/friend';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private url = 'friend';

  constructor(private http: HttpClient) {}

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.url);
  }

  createFriend(friend: Omit<Friend, 'id'>): Observable<void> {
    return this.http.post<void>(this.url, friend);
  }

  updateFriend({ id, name }: Friend): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}?name=${name}`, {});
  }

  deleteFriend({ id }: Friend): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
