import { Component, inject } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { LoginService } from '../modal/login/login.service';
import { AuthFacdes as AuthFacdes } from 'src/app/store/auth/auth.facades';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './pokemon-menu.component.html',
  styleUrl: './pokemon-menu.component.css'
})
export class PokemonMenuComponent {
  loginService = inject(LoginService);
  authFacade = inject(AuthFacdes)

  open() {
    this.authFacade.login('2')
    this.loginService.Open()

    this.authFacade.isLogin().subscribe(isLoggedIn => {
      console.log('my auth is ', isLoggedIn);
    });
  }
}
