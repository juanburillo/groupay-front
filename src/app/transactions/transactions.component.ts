import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from '../core/services/transactions/transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  transactionData: any;

  constructor(private transactionService: TransactionsService, private router: Router) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((response) => {
      this.transactionData = response;
    });
  }

  navigateToExpenses() {
    this.router.navigate(['/expenses']);
  }
}
