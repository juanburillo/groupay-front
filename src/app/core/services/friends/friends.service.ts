import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private url = '/api/friend';

  constructor(private http: HttpClient) {}

  getFriends() {
    return this.http.get(this.url);
  }

  createFriend(data: any) {
    return this.http.post(this.url, data);
  }

  updateFriend(id: number, newFriendName: string) {
    return this.http.put(`${this.url}/${id}?name=${newFriendName}`, {});
  }

  deleteFriend(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
