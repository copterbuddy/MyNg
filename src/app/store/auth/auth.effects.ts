import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login } from "./auth.actions";
import { map, mergeMap, tap } from "rxjs";
import { LocalStorageKey, LocalStorageService } from "src/app/components/shared/services/localStorage/local-storage.service";

export const authLogin$ = createEffect(
  (actions$ = inject(Actions),localStorageService = inject(LocalStorageService)) => {
    return actions$.pipe(
      ofType(login),
      tap(({ userId }) => {
        localStorageService.saveData(LocalStorageKey.TOKEN, userId)
      })
    )
  },
  {functional: true, dispatch: false}
)
