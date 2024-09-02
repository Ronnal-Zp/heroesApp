import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../heroes/interfaces/user.interface';
import { catchError, map, Observable, of, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private user: User | null = null;

  constructor(private httpClient: HttpClient) { }

  get currentUser(): User | null {
    if(!this.user) return null;
    return { ...this.user };
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', user.id.toString() ))
      )
  }

  logout() {
    this.user = null;
    localStorage.clear();
  }


  checkAuthentication(): Observable<boolean> {
    if( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false))
      )
  }

}
