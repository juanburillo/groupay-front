import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../core/services/friends/friends.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-friends.component.html',
})
export class ListFriendsComponent implements OnInit {
  data: any;
  formData: any = {};

  constructor(private friendService: FriendsService) {}

  ngOnInit() {
    this.showFriends();
  }

  showFriends() {
    this.friendService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  submitData() {
    this.friendService.postData(this.formData).subscribe((response) => {
      console.log(response);
      this.showFriends();
    });
  }
}
