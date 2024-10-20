import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailed, loginSuccess } from "./auth.actions";
import { catchError, map, mergeMap, tap } from "rxjs";
import { LocalStorageKey, LocalStorageService } from "src/app/components/shared/services/localStorage/local-storage.service";

export const authLogin$ = createEffect(
  (actions$ = inject(Actions),localStorageService = inject(LocalStorageService)) => {
    return actions$.pipe(
      ofType(login),
      tap(({ userId }) => {
        localStorageService.saveData(LocalStorageKey.TOKEN, userId)
      }),
      map(() => loginSuccess()),
      catchError((error => {
        console.warn('An error occurred while adding Pokemon:', error);
        return [loginFailed()]
      }))
    )
  },
  {functional: true, dispatch: true}
)
