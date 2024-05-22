import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../core/services/expenses/expenses.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from '../../shared/create-dialog/create-dialog.component';
import { Router } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-list-expenses',
  standalone: true,
  imports: [CreateDialogComponent, DeleteDialogComponent],
  templateUrl: './list-expenses.component.html',
})
export class ListExpensesComponent implements OnInit {
  expenseData?: Expense[];

  showCreateDialog: boolean = false;
  showDeleteDialog: boolean = false;

  expenseToDelete?: Expense;

  constructor(
    private expenseService: ExpensesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showExpenses();
  }

  showExpenses(): void {
    this.expenseService.getExpenses().subscribe((response) => {
      this.expenseData = response;
    });
  }

  createExpense(expense: Expense): void {
    this.expenseService.createExpense(expense).subscribe(() => {
      this.toggleCreateDialog();
      this.showExpenses();
    });
  }

  toggleCreateDialog(): void {
    this.showCreateDialog = !this.showCreateDialog;
  }

  toggleDeleteDialog(expense: Expense): void {
    this.expenseToDelete = expense;
    this.showDeleteDialog = !this.showDeleteDialog;
  }

  deleteExpense(): void {
    this.expenseService.deleteExpense(this.expenseToDelete!).subscribe(() => {
      this.toggleDeleteDialog({});
      this.showExpenses();
    });
  }

  timeAgo(dateString: string): string {
    const inputDate: any = new Date(dateString);
    const now: any = new Date();
    const diff = now - inputDate; // Difference in milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximation
    const years = Math.floor(months / 12);

    if (years > 0) {
      return years === 1 ? '1 year ago' : `${years} years ago`;
    } else if (months > 0) {
      return months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
      return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
      return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
    }
  }

  navigateToTransactions(): void {
    this.router.navigate(['/transactions']);
  }
}
