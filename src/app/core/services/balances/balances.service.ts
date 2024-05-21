import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalancesService {
  private url = '/api/balance'

  constructor(private http: HttpClient) { }

  getBalances() {
    return this.http.get(this.url);
  }
}
