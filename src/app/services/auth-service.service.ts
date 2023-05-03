import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = "https://localhost:7149/api/Users";
  constructor(private http: HttpClient){}


  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      tap((response) => {
        localStorage.setItem('jwtToken', response.token);
      })
    );
  }


  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwtToken');
    return token !== null;
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    location.reload();
  }
}
