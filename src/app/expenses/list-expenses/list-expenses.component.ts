import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../core/services/expenses/expenses.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from '../../shared/create-dialog/create-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-expenses',
  standalone: true,
  imports: [CreateDialogComponent, DeleteDialogComponent],
  templateUrl: './list-expenses.component.html',
})
export class ListExpensesComponent implements OnInit {
  expenseData: any;

  showCreateDialog: boolean = false;
  showDeleteDialog: boolean = false;

  expenseToDelete: any;

  constructor(private expenseService: ExpensesService, private router: Router) {}

  ngOnInit() {
    this.showExpenses();
  }

  showExpenses() {
    this.expenseService.getExpenses().subscribe((response) => {
      this.expenseData = response;
    });
  }

  createExpense(friend: any) {
    console.log(friend);
    this.expenseService.createExpense(friend).subscribe(() => {
      this.toggleCreateDialog();
      this.showExpenses();
    });
  }

  toggleCreateDialog() {
    this.showCreateDialog = !this.showCreateDialog;
  }

  toggleDeleteDialog(expense: any) {
    this.expenseToDelete = expense;
    this.showDeleteDialog = !this.showDeleteDialog;
  }

  deleteExpense() {
    this.expenseService.deleteExpense(this.expenseToDelete.id).subscribe(() => {
      this.toggleDeleteDialog(null);
      this.showExpenses(); // Refresh the list
    });
  }

  timeAgo(dateString: string) {
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

  navigateToTransactions() {
    this.router.navigate(['/transactions']);
  }
}
