import { UserInfo } from './auth.state';
import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { forceLogin, login, loginFromGoogle, logout, setUserInfoClient, setUserInformation } from "./auth.actions";
import { selectAuthIsLoggedIn, selectAuthUserId, selectForceLogin as selectAuthForceLogin, selectAuth } from "./auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacdes {
  private readonly store: Store = inject(Store)

  login(userId: string){
    this.store.dispatch(login({ userId }))
  }

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

  getUserInfo(){
    return this.store.select(selectAuthUserId)
  }

  setUserInfoClient(){
    return this.store.dispatch(setUserInfoClient())
  }

  setUserInfo(userInfo: UserInfo){
    return this.store.dispatch(setUserInformation({ userInfo }))
  }
}
