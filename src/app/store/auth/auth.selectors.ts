import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { Appstate } from "..";
import { AuthState, UserInfo } from "./auth.state";

export const selectAuthFeature: MemoizedSelector<Appstate, AuthState> = createFeatureSelector<AuthState>('auth')

export const selectAuthIsGoogleLogin: MemoizedSelector<Appstate, boolean> = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.IsGoogleLogin
)

export const selectAuthIsLoggedIn: MemoizedSelector<Appstate, boolean> = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => {
    return !!state?.UserInfo?.Email
  }
)

export const selectForceLogin: MemoizedSelector<Appstate, boolean> = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.ForceLogin
)

export const selectAuthUserInfo: MemoizedSelector<Appstate, UserInfo> = createSelector(
  selectAuthFeature,
  (state: AuthState): UserInfo => state.UserInfo
)

export const selectAuth: MemoizedSelector<Appstate, AuthState> = createSelector(
  selectAuthFeature,
  (state: AuthState): AuthState => state
)
