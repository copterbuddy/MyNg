import { login, logout } from './auth.actions';
import { AuthState, initialState } from './auth.state';
import { ActionReducer, createReducer, on } from "@ngrx/store";

export const authReducers: ActionReducer<AuthState> = createReducer(
  initialState,
  on(login, (state: AuthState, { userId }) => ({
    ...state, IsLoggedIn: true, UserId: userId
  })),
  on(logout, (state: AuthState) => ({
    ...state, IsLoggedIn: false, UserId: ''
  }))
)
