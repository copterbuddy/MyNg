import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailed, loginFromGoogle, loginFromGoogleFlagSaveFailed, loginFromGoogleFlagSaveSuccess, loginSuccess, setUserInfoClient, setUserInformation, setUserInformationFailed, setUserInformationSuccess } from "./auth.actions";
import { catchError, map, of, switchMap, take, tap, withLatestFrom } from "rxjs";
import { LocalStorageKey, LocalStorageService } from "src/app/components/shared/services/localStorage/local-storage.service";
import { AuthFacdes } from "./auth.facades";
import { UserInfo } from "./auth.state";
import { HttpClient } from "@angular/common/http";

let baseUrl = 'http://localhost:5131'

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

export const authLoginFromGoogle$ = createEffect(
  (actions$ = inject(Actions),localStorageService = inject(LocalStorageService),authFacades = inject(AuthFacdes)) => {
    return actions$.pipe(
      ofType(loginFromGoogle),
      switchMap(() =>
        authFacades.getUser().pipe(
          switchMap(authState => {
            let flag = authState?.IsGoogleLogin ?? false
            localStorageService.saveData(LocalStorageKey.IsGoogleLogin,  flag.toString())
            return of(flag)
          })
        )),
      map((isSaveFlag) => isSaveFlag ? loginFromGoogleFlagSaveSuccess() : loginFromGoogleFlagSaveFailed()),
      catchError((error => {
        console.warn('An error occurred while adding Pokemon:', error);
        return [loginFromGoogleFlagSaveFailed()]
      }))
    )
  },
  {functional: true, dispatch: true}
)

export const authSetUserInformation$ = createEffect(
  (actions$ = inject(Actions),http = inject(HttpClient),authFacades = inject(AuthFacdes)) => {
    return actions$.pipe(
      ofType(setUserInfoClient),
      map(() => {
        let user = http.get<UserInfo>(`${baseUrl}/GoogleLogin/GetInfo`, {withCredentials: true})
        return user
      }),
      map((user) => {
        user.pipe(
          take(1),
        )
        .subscribe({
          next: (value) => {
            console.log("client get info", value)
            authFacades.setUserInfo(value)
          }
        })
        return setUserInformationSuccess()
      }),
      catchError((error => {
        console.warn('An error occurred while set User Information:', error);
        return [setUserInformationFailed()]
      }))
    )
  },
  {functional: true, dispatch: true}
)
