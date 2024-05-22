import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../../expenses/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private url = 'expense';

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.url);
  }

  createExpense(expense: Expense): Observable<void> {
    return this.http.post<void>(this.url, expense);
  }

  deleteExpense({ id }: Expense): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
