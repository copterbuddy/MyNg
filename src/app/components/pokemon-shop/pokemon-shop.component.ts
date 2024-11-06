import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { PokemonMenuComponent } from '../shared/pokemon-menu/pokemon-menu.component';
import { PokemonFacade } from 'src/app/store/pokemon/pokemon.facade';
import { AsyncPipe } from '@angular/common';
import { LoginComponent } from "../shared/modal/login/login.component";
import { LoginService } from '../shared/modal/login/login.service';
import { LocalStorageKey, LocalStorageService } from '../shared/services/localStorage/local-storage.service';
import { take, finalize } from 'rxjs';
import { UserInfo } from 'src/app/store/auth/auth.state';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    RouterLink,
    PokemonCardComponent,
    PokemonMenuComponent,
    RouterOutlet,
    PokemonCardsComponent,
    AsyncPipe,
    LoginComponent
],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div style="margin-left: 5px;">
        <a class="nav-link disabled">My Pokemon: {{ pokemonFacade.getPokemonTotal() | async }}ea</a>
      </div>
    </nav>
    <div class="overflow-hidden overflow-x-hidden overflow-y-auto">
      <app-pokemon-cards></app-pokemon-cards>
    </div>
  `,
  styleUrl: './pokemon-shop.component.css'
})
export class PokemonShopComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef)
  private readonly authFacdes = inject(AuthFacdes)
  http = inject(HttpClient)

  pokemonFacade = inject(PokemonFacade)
  loginService = inject(LoginService)

  authFacade = inject(AuthFacdes)
  isLoginFromGoogle = signal<boolean>(false)
  localStorageService = inject(LocalStorageService)
  baseUrl = 'http://localhost:5131'

  constructor() {
    // effect(() => {
    //   if(this.isLoginFromGoogle()){
    //     // this.authFacade.setUserInfoClient()

    //   }
    // })
  }

  ngOnInit(): void{
    this.authFacade.getUser().pipe(take(1)).subscribe({
      next: (value) => {
        let isLogin = value.IsGoogleLogin
        if(!isLogin) {
          isLogin = (this.localStorageService.getData(LocalStorageKey.IsGoogleLogin) ?? false) === 'true';
        }

        this.isLoginFromGoogle.set(isLogin)
        this.authFacade.setUserInfoClient()

        if(isLogin) {
          this.isLoginFromGoogle.set(false)
          this.loginService.Open()
        }
      },
      error:(ex) => {
        console.log(ex)
      },
      complete: () => {
      }
    })

    this.authFacdes.isForceLogin().subscribe({
      next: (value) => {
        if (value) {
          this.authFacdes.forceLogin(false)
          this.loginService.Open()
        }
      }
    })

    this.destroyRef.onDestroy(() => {

    })
  }
}
