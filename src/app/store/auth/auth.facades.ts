import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { forceLogin, login, logout } from "./auth.actions";
import { selectAuthIsLoggedIn, selectAuthUserInfo, selectForceLogin as selectAuthForceLogin } from "./auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacdes {
  private readonly store: Store = inject(Store)

  login(userId: string){
    this.store.dispatch(login({ userId }))
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
    return this.store.select(selectAuthUserInfo)
  }
}
