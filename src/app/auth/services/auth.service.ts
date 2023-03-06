import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environmets';
import { Observable, of, tap } from 'rxjs';
import { User } from '../../shared/interfaces/general.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseURL;
  private _userAuth: User | undefined;

  constructor(
    private httpClient: HttpClient
  ) { }


  get userAuth() {
    return { ...this._userAuth };
  }


  login(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this._baseUrl}/usuarios/${id}`)
                .pipe(
                  tap(user => this._userAuth = user)
                );
  }



}
