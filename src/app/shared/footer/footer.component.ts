import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToExpenses() {
    this.router.navigate(['/expenses']);
  }

  navigateToFriends() {
    this.router.navigate(['/friends']);
  }
}
