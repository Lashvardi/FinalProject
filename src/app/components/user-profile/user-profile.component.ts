import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  user: User | undefined;

  constructor(private AuthService: AuthServiceService) {
    const phoneNumber = localStorage.getItem('PhoneNumber') || '';
    this.AuthService.getUser(phoneNumber).subscribe(
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
