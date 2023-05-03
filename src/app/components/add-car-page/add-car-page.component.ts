import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-car-page',
  templateUrl: './add-car-page.component.html',
  styleUrls: ['./add-car-page.component.scss']
})
export class AddCarPageComponent {
  user: User = {
    phoneNumber: '',
    password: '',
  };

  constructor(private authService: AuthServiceService) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful!');
      },
      (error) => {
        console.log('Login failed!');
      }
    );
  }

}
