import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FriendsService } from '../../core/services/friends/friends.service';
import { FormsModule } from '@angular/forms';
import { Friend } from '../../friends/friend';

@Component({
  selector: 'app-create-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-dialog.component.html',
})
export class CreateDialogComponent implements OnInit {
  @Output() cancelCreate: EventEmitter<any> = new EventEmitter();
  @Output() acceptCreate: EventEmitter<any> = new EventEmitter();

  friendData?: Friend[];

  amount?: number;
  description?: string;
  friendId?: number = 0;

  showErrorText: boolean = false;

  constructor(private friendService: FriendsService) {}

  ngOnInit(): void {
    this.friendService.getFriends().subscribe((response) => {
      this.friendData = response;
    });
  }

  cancel(): void {
    this.cancelCreate.emit();
  }

  accept(): void {
    if (this.validateFormData()) {
      this.acceptCreate.emit({
        amount: this.amount,
        description: this.description,
        friendId: this.friendId,
      });
    }
  }

  validateFormData(): boolean {
    this.showErrorText = false;
    if (!this.amount || this.amount <= 0) {
      this.showErrorText = true;
      return false;
    }

    if (!this.description || this.description.trim() === '') {
      this.showErrorText = true;
      return false;
    }

    if (!this.friendId || this.friendId === 0) {
      this.showErrorText = true;
      return false;
    }

    return true;
  }
}
