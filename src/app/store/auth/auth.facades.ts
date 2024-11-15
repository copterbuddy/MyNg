import { UserInfo } from './auth.state';
import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { forceLogin, login, loginFromGoogle, logout, setUserInfoClient, setUserInformation } from "./auth.actions";
import { selectAuthIsLoggedIn, selectForceLogin as selectAuthForceLogin, selectAuth, selectAuthUserInfo } from "./auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacdes {
  private readonly store: Store = inject(Store)

  loginFromGoogle(){
    this.store.dispatch(loginFromGoogle())
  }

  getUser(){
    return this.store.select(selectAuth)
  }

  logout(){
    this.store.dispatch(logout())
  }

  isLogin(){
    return this.store.select(selectAuthIsLoggedIn)
  }

  forceLogin(value: boolean){
    this.store.dispatch(forceLogin({ value }))
  }

  isForceLogin(){
    return this.store.select(selectAuthForceLogin)
  }

  setUserInfoClient(){
    return this.store.dispatch(setUserInfoClient())
  }

  setUserInfo(userInfo: UserInfo){
    return this.store.dispatch(setUserInformation({ userInfo }))
  }
}
