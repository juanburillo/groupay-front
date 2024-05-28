import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../../core/services/friends/friends.service';
import { FormsModule } from '@angular/forms';
import { EditDialogComponent } from '../../../shared/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { BalancesService } from '../../../core/services/balances/balances.service';
import { Friend } from '../friend';
import { Balance } from '../balance';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [FormsModule, EditDialogComponent, DeleteDialogComponent],
  templateUrl: './list-friends.component.html',
})
export class ListFriendsComponent implements OnInit {
  friendData: Friend[] = [];
  balanceData: Balance[] = [];

  name: string = '';

  showEditDialog: boolean = false;
  showDeleteDialog: boolean = false;
  showErrorText: boolean = false;

  friendToEdit: Friend = {};
  friendToDelete: Friend = {};

  constructor(
    private friendsService: FriendsService,
    private balancesService: BalancesService
  ) {}

  ngOnInit(): void {
    this.showFriends();
  }

  showFriends(): void {
    this.friendsService.getFriends().subscribe((response) => {
      this.friendData = response;
    });
    this.showBalances();
  }

  showBalances(): void {
    this.balancesService.getBalances().subscribe((response) => {
      this.balanceData = response;
    });
  }

  createFriend(event: Event): void {
    event.preventDefault();
    if (this.validateFormData()) {
      this.friendsService.createFriend({ name: this.name }).subscribe(() => {
        this.name = ''; 
        this.showFriends();
      });
    }
  }

  toggleEditDialog(friend: Friend): void {
    this.friendToEdit = friend;
    this.showEditDialog = !this.showEditDialog;
  }

  editFriend(name: string): void {
    this.friendsService
      .updateFriend({ id: this.friendToEdit.id, name })
      .subscribe(() => {
        this.toggleEditDialog({});
        this.showFriends();
      });
  }

  toggleDeleteDialog(friend: Friend): void {
    this.friendToDelete = friend;
    this.showDeleteDialog = !this.showDeleteDialog;
  }

  deleteFriend(): void {
    this.friendsService.deleteFriend(this.friendToDelete).subscribe(() => {
      this.toggleDeleteDialog({});
      this.showFriends();
    });
  }

  validateFormData(): boolean {
    this.showErrorText = false;
    if (!this.name || this.name.trim() === '') {
      this.showErrorText = true;
      return false;
    }
    return true;
  }
}
