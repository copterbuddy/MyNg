import { createAction, props } from "@ngrx/store"

export const authKey = '[Auth]'

export const login = createAction(
  `${authKey} Login`,
  props<{ userId: string }>()
)

export const loginSuccess = createAction(
  `${authKey} Login Success`,
)

export const loginFailed = createAction(
  `${authKey} Login Failed`,
)

export const logout = createAction(
  `${authKey} Logout`,
)

export const forceLogin = createAction(
  `${authKey} Force Login`,
  props<{ value: boolean}>()
)
