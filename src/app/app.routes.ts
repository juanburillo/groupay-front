import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ListFriendsComponent } from './features/friends/list-friends/list-friends.component';
import { ListExpensesComponent } from './features/expenses/list-expenses/list-expenses.component';
import { ListTransactionsComponent } from './features/transactions/list-transactions/transactions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'friends', component: ListFriendsComponent },
    { path: 'expenses', component: ListExpensesComponent },
    { path: 'transactions', component: ListTransactionsComponent }
];
