export interface AuthState{
  UserId: string,
  IsLoggedIn: boolean,
  ForceLogin: boolean,
}

export const initialState: AuthState = {
  UserId: '',
  IsLoggedIn: false,
  ForceLogin: false,
}
