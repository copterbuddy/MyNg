import { createAction, props } from "@ngrx/store"

export const authKey = '[Auth]'

export const login = createAction(
  `${authKey} Login`,
  props<{ userId: string }>()
)

export const logout = createAction(
  `${authKey} Logout`,
)
