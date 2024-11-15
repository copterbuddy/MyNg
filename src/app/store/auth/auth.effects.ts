import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailed, loginFromGoogle, loginFromGoogleFlagSaveFailed, loginFromGoogleFlagSaveSuccess, loginSuccess, logout, setUserInfoClient, setUserInformation, setUserInformationFailed, setUserInformationSuccess } from "./auth.actions";
import { catchError, map, of, switchMap, take, tap, withLatestFrom } from "rxjs";
import { LocalStorageKey, LocalStorageService } from "src/app/components/shared/services/localStorage/local-storage.service";
import { AuthFacdes } from "./auth.facades";
import { UserInfo } from "./auth.state";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

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

export const authLogout$ = createEffect(
  (actions$ = inject(Actions),localStorageService = inject(LocalStorageService),authFacades = inject(AuthFacdes)) => {
    return actions$.pipe(
      ofType(logout),
      tap(() => {
        localStorageService.removeData(LocalStorageKey.TOKEN)
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

interface UserInfoResponse{
  email: string
}

export const authSetUserInformation$ = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient), authFacades = inject(AuthFacdes), localStorageService = inject(LocalStorageService)) => {
    return actions$.pipe(
      ofType(setUserInfoClient),
      switchMap(() =>
        http.get<UserInfoResponse>(`${baseUrl}/GoogleLogin/GetInfo`, { withCredentials: true }).pipe(
          take(1),
          tap((value) => {

            let userInfo: UserInfo = {
              Email: value.email
            }

            authFacades.setUserInfo(userInfo)
            localStorageService.saveData(LocalStorageKey.IsGoogleLogin, 'false')

          }),
          map(() => setUserInformationSuccess()),
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status !== 401) {
              console.warn(error);
            }
            return [setUserInformationFailed()];
          })
        )
      )
    );
  },
  { functional: true, dispatch: true }
);
