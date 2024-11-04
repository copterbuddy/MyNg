import { Component, inject } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { LoginService } from '../modal/login/login.service';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  http = inject(HttpClient)

  logout(){
    this.http.get('http://localhost:5131/GoogleLogin/SignOutFromGoogleLogin', {withCredentials: true}).subscribe({
      next: (value) => {console.log},
    })
  }

  open() {
    this.loginService.Open()
  }
}
