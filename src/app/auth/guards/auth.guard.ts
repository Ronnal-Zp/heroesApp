import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Router,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, tap } from 'rxjs';


export const CanActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuth();
};


export const CanMatch: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuth();
}

const checkAuth = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap(isAuth => console.log('auth guard', isAuth)),
      tap(isAuth => {
        if(!isAuth) router.navigate(['auth/login'])
      })
    )
}

export const AuthGuard = {
  CanActivate, CanMatch
}
