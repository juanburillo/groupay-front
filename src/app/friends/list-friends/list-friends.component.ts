import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../core/services/friends/friends.service';
import { FormsModule } from '@angular/forms';
import { EditDialogComponent } from '../../shared/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { BalancesService } from '../../core/services/balances/balances.service';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [FormsModule, EditDialogComponent, DeleteDialogComponent],
  templateUrl: './list-friends.component.html',
})
export class ListFriendsComponent implements OnInit {
  friendData: any;
  balanceData: any;

  formData: any = {};

  showEditDialog: boolean = false;
  showDeleteDialog: boolean = false;

  friendToEdit: any;
  friendToDelete: any;

  constructor(private friendService: FriendsService, private balanceService: BalancesService) {}

  ngOnInit() {
    this.showFriends();
  }

  showFriends() {
    this.friendService.getFriends().subscribe((response) => {
      this.friendData = response;
    });
    this.showBalances();
  }

  showBalances() {
    this.balanceService.getBalances().subscribe((response) => {
      this.balanceData = response;
    });
  }

  createFriend(event: Event) {
    event.preventDefault();
    this.friendService.createFriend(this.formData).subscribe(() => {
      this.formData = {}; // Clear form data
      this.showFriends(); // Refresh the list
    });
  }

  toggleEditDialog(friend: any) {
    this.friendToEdit = friend;
    this.showEditDialog = !this.showEditDialog;
  }

  editFriend(newFriendName: string) {
    this.friendService.updateFriend(this.friendToEdit.id, newFriendName).subscribe(() => {
      this.toggleEditDialog(null);
      this.showFriends();
    });
  }

  toggleDeleteDialog(friend: any) {
    this.friendToDelete = friend;
    this.showDeleteDialog = !this.showDeleteDialog;
  }

  deleteFriend() {
    this.friendService.deleteFriend(this.friendToDelete.id).subscribe(() => {
      this.toggleDeleteDialog(null);
      this.showFriends(); // Refresh the list
    });
  }
}
