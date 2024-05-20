import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private url = '/api/friend';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }

  postData(data: any) {
    return this.http.post(this.url, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
