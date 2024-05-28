import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../../features/transactions/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private url = 'transaction';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url);
  }
}
