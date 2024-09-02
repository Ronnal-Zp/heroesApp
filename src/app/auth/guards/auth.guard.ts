import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Router,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, pipe, tap } from 'rxjs';


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
      tap(isAuth => {
        if(!isAuth) router.navigate(['auth/login'])
      })
    )
}

export const AuthGuard = {
  CanActivate, CanMatch
}
