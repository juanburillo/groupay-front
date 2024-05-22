import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private url = '/api/transaction';

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get(this.url);
  }
}
