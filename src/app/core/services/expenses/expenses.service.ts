import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private url = '/api/expense';

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get(this.url);
  }

  deleteExpense(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
