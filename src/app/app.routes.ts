import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFriendsComponent } from './friends/list-friends/list-friends.component';
import { ListExpensesComponent } from './expenses/list-expenses/list-expenses.component';
import { ListTransactionsComponent } from './transactions/list-transactions/transactions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'friends', component: ListFriendsComponent },
    { path: 'expenses', component: ListExpensesComponent },
    { path: 'transactions', component: ListTransactionsComponent }
];
