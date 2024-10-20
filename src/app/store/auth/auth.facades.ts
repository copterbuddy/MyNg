import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { login, logout } from "./auth.actions";
import { selectAuthIsLoggedIn } from "./auth.selectors";

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
}
