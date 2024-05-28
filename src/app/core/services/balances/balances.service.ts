import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../../../features/friends/balance';

@Injectable({
  providedIn: 'root',
})
export class BalancesService {
  private url = 'balance';

  constructor(private http: HttpClient) {}

  getBalances(): Observable<Balance[]> {
    return this.http.get<Balance[]>(this.url);
  }
}
