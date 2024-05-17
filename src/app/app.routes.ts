import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFriendsComponent } from './friends/list-friends/list-friends.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'friends', component: ListFriendsComponent }
];
