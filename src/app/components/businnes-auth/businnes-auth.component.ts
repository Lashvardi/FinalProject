import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-businnes-auth',
  templateUrl: './businnes-auth.component.html',
  styleUrls: ['./businnes-auth.component.scss']
})
export class BusinnesAuthComponent {
  user: User = {
    phoneNumber: '',
    password: '',
    firstName: '',
    lastName: ''
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
