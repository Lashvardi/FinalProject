import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  constructor(public AuthService: AuthServiceService){}
}
