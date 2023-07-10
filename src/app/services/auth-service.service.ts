import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = "https://rentcar.webwide.ge/api/Users";
  constructor(private http: HttpClient){}


  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }


  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      tap((response) => {
        localStorage.setItem('jwtToken', response.token);
        localStorage.setItem("PhoneNumber", response.phoneNumber)
        localStorage.setItem("UserEmail", response.email)
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      })
    );
  }

  getUser(phoneNumber: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${phoneNumber}`);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwtToken');
    return token !== null;
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('PhoneNumber');
    localStorage.removeItem('UserEmail');
    location.reload();
  }
}
