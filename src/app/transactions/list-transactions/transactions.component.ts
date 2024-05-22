import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from '../../core/services/transactions/transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './list-transactions.component.html',
})
export class ListTransactionsComponent implements OnInit {
  transactionData: any;

  constructor(
    private transactionsService: TransactionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions().subscribe((response) => {
      this.transactionData = response;
    });
  }

  navigateToExpenses(): void {
    this.router.navigate(['/expenses']);
  }
}
