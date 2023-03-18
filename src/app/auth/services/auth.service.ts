import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environmets';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../../shared/interfaces/general.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseURL;
  private _userAuth: User | undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  /**
   * Get user auth
   */
  get userAuth() {
    return { ...this._userAuth };
  }

  /**
   *
   * @param id
   * @returns User
   */
  login(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this._baseUrl}/usuarios/${id}`)
                .pipe(
                  tap(user => this._userAuth = user),
                  tap(user => localStorage.setItem('id', String(user.id) ))
                );
  }


  /**
   *
   * @param username
   * @returns User[]
   */
  loginByUsername(username: string): Observable<User[]> {
    let queryParams = '?usuario=' + username;

    return this.httpClient.get<User[]>(`${ this._baseUrl }/usuarios${ queryParams }`)
                  .pipe(
                    tap(user => this._userAuth = user[0]),
                    tap(user => localStorage.setItem('id', String(user[0]?.id) ))
                  );
  }


  /**
   *
   * @return void
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['./auth']);
  }


  /**
   *
   * @param usuario
   * @param email
   * @returns User
   */
  register(usuario: string, email: string): Observable<User> {
    return this.httpClient.post<User>(`${this._baseUrl}/usuarios`, { usuario, email })
  }


  /**
   *
   * @returns boolean
   */
  isLogged(): Observable<boolean> {
    const id = localStorage.getItem('id');

    if( id ) {
      return this.login( id ).pipe(
              map(heroe => {
                this._userAuth = heroe
                return true;
              })
            )
    }

    return of(false);
  }

}
