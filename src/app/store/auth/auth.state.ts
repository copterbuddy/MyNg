export interface AuthState{
  ForceLogin: boolean,
  IsGoogleLogin: boolean,
  UserInfo: UserInfo,
}

export const initialState: AuthState = {
  ForceLogin: false,
  IsGoogleLogin: false,
  UserInfo: {
    Email: ''
  }
}

export interface UserInfo{
  Email: string
}
