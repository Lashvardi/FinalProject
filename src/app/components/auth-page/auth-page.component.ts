import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  user: User = {
    phoneNumber: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registered successful!');
        this.router.navigate(['/Registered']);
      },
      (error) => {
        console.log('Registed failed!');
      }
    );
  }
}
