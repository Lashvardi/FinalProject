import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-succesfuly',
  templateUrl: './registered-succesfuly.component.html',
  styleUrls: ['./registered-succesfuly.component.scss'],
})
export class RegisteredSuccesfulyComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/Login']);
    }, 5000);
  }
}
