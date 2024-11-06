import { forceLogin, login, loginFromGoogle, logout, setUserInfoClient, setUserInformation } from './auth.actions';
import { AuthState, initialState } from './auth.state';
import { ActionReducer, createReducer, on } from "@ngrx/store";

export const authReducers: ActionReducer<AuthState> = createReducer(
  initialState,
  on(login, (state: AuthState, { userId }) => ({
    ...state, IsLoggedIn: true, UserId: userId
  })),
  on(loginFromGoogle, (state: AuthState) => ({
    ...state, IsGoogleLogin: true
  })),
  on(logout, (state: AuthState) => ({
    ...state, IsLoggedIn: false, UserId: '', UserInfo: { Email: '' }
  })),
  on(forceLogin, (state: AuthState, { value }) => ({
    ...state, ForceLogin: value
  })),
  on(setUserInfoClient, (state: AuthState) => ({
    ...state, IsGoogleLogin: false
  })),
  on(setUserInformation, (state: AuthState, { userInfo }) => ({
    ...state, UserInfo: userInfo, IsLoggedIn: true
  }))
)
