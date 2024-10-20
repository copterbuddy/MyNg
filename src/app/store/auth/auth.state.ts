export interface AuthState{
  IsLoggedIn: boolean,
  UserId: string
}

export const initialState: AuthState = {
  IsLoggedIn: false,
  UserId: ''
}
