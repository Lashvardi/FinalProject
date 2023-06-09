import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PurchaseCarService } from 'src/app/services/purchase-car.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  user: User | undefined;
  constructor(
    private authService: AuthServiceService,
    private purchase: PurchaseCarService
  ) {
    const phoneNumber = localStorage.getItem('PhoneNumber') || '';
    this.authService.getUser(phoneNumber).subscribe(
      (user) => {
        this.user = user;
        console.log(user);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
