import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    phoneNumber: '',
    password: '',
    FirstName: '',
    lastName: ''
  };

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful!');
        this.router.navigate(['/'])
      },
      (error) => {
        console.log('Login failed!');
      }
    );
  }
}
