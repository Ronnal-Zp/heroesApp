import {
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  UrlSegment
} from '@angular/router';

import { inject } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const CanActivate: CanActivateFn = (route, state) => {
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
      tap(isAuth => console.log('public guard', isAuth)),
      tap(isAuth => {
        if(isAuth) router.navigate(['heroes/list'])
      }),
      map(isAuth => !isAuth) // si no esta autenticado, debe permitir pasar
    )
}


export const PublicGuard = {
  CanActivate, CanMatch
}
