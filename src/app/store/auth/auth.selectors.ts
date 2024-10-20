import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { Appstate } from "..";
import { AuthState } from "./auth.state";

export const selectAuthFeature: MemoizedSelector<Appstate, AuthState> = createFeatureSelector<AuthState>('auth')

export const selectAuthIsLoggedIn: MemoizedSelector<Appstate, boolean> =
  createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.IsLoggedIn
)
