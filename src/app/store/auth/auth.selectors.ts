import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { Appstate } from "..";
import { AuthState } from "./auth.state";

export const selectAuthFeature: MemoizedSelector<Appstate, AuthState> = createFeatureSelector<AuthState>('auth')

export const selectAuthIsLoggedIn: MemoizedSelector<Appstate, boolean> = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.IsLoggedIn
)

export const selectForceLogin: MemoizedSelector<Appstate, boolean> = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.ForceLogin
)

export const selectAuthUserInfo: MemoizedSelector<Appstate, string> = createSelector(
  selectAuthFeature,
  (state: AuthState): string => state.UserId
)
