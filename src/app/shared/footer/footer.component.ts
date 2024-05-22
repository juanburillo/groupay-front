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

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  navigateToExpenses(): void {
    this.router.navigate(['/expenses']);
  }

  navigateToFriends(): void {
    this.router.navigate(['/friends']);
  }
}
