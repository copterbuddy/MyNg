import { Component, inject } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { LoginService } from '../modal/login/login.service';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';
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
    this.loginService.Open()
  }
}
