export interface AuthState{
  UserId: string,
  IsLoggedIn: boolean,
  ForceLogin: boolean,
  IsGoogleLogin: boolean,
  UserInfo: UserInfo,
}

export const initialState: AuthState = {
  UserId: '',
  IsLoggedIn: false,
  ForceLogin: false,
  IsGoogleLogin: false,
  UserInfo: {
    Email: ''
  }
}

export interface UserInfo{
  Email: string
}
