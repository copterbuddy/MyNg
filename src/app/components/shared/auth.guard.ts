import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';

export const authGuard: CanActivateFn = (route, state) => {
  const authFacade = inject(AuthFacdes);
  const router = inject(Router);
  return authFacade.isLogin().pipe(
    map((isLoggedIn) => {
      if (!isLoggedIn) {
        authFacade.forceLogin(true);
        router.navigate(['/']);
      }

      return isLoggedIn;
    })
  );
};
