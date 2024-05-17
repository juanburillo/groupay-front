import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../core/services/friends/friends.service';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [],
  templateUrl: './list-friends.component.html',
})
export class ListFriendsComponent implements OnInit {
  data: any;

  constructor(private friendService: FriendsService) {}

  ngOnInit() {
    const url = '/api/friend';
    this.friendService.getData(url).subscribe((response) => {
      this.data = response;
    });
  }
}
