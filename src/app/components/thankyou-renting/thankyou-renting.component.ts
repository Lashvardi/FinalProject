import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou-renting',
  templateUrl: './thankyou-renting.component.html',
  styleUrls: ['./thankyou-renting.component.scss']
})
export class ThankyouRentingComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/profile']);
    }, 3000);
  }
}
