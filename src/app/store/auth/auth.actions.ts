import { createAction, props } from "@ngrx/store"
import { UserInfo } from "./auth.state"

export const authKey = '[Auth]'

export const login = createAction(
  `${authKey} Login`,
  props<{ userId: string }>()
)

export const loginFromGoogle = createAction(
  `${authKey} Login From Google`,
)

export const loginFromGoogleFlagSaveSuccess = createAction(
  `${authKey} Login From Google Flag Save Success`,
)

export const loginFromGoogleFlagSaveFailed = createAction(
  `${authKey} Login From Google Flag Save Failed`,
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

export const setUserInfoClient = createAction(
  `${authKey} Set User Information Client`,
)

export const setUserInformation = createAction(
  `${authKey} Set User Information`,
  props<{ userInfo: UserInfo}>()
)

export const setUserInformationSuccess = createAction(
  `${authKey} Set User Information Success`,
)

export const setUserInformationFailed = createAction(
  `${authKey} Set User Information Failed`,
)
