import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FriendsService } from '../../core/services/friends/friends.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-dialog.component.html',
})
export class CreateDialogComponent implements OnInit {
  @Output() cancelCreate: EventEmitter<any> = new EventEmitter();
  @Output() acceptCreate: EventEmitter<any> = new EventEmitter();

  friendData: any;

  amount?: number;
  description?: string;
  friendId?: number = 0;

  showErrorText: boolean = false;

  constructor(private friendService: FriendsService) {}

  ngOnInit() {
    this.friendService.getFriends().subscribe((response) => {
      this.friendData = response;
    });
  }

  cancel() {
    this.cancelCreate.emit();
  }

  accept() {
    if (this.validateFormData()) {
      this.acceptCreate.emit({
        amount: this.amount,
        description: this.description,
        friendId: this.friendId,
      });
    }
  }

  validateFormData() {
    this.showErrorText = false;
    if (this.amount === undefined || this.amount === null || this.amount <= 0) {
      this.showErrorText = true;
      return false;
    } else if (this.description === undefined || this.description === null || this.description === '') {
      this.showErrorText = true;
      return false;
    } else if (this.friendId === undefined || this.friendId === 0) {
      this.showErrorText = true;
      return false;
    } else {
      return true;
    }
  }
}
