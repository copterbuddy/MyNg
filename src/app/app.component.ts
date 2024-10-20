import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { Component, inject, OnInit } from '@angular/core';
import {
  RouterOutlet,
} from '@angular/router';
import { PokemonMenuComponent } from './components/shared/pokemon-menu/pokemon-menu.component';
import { LocalStorageKey, LocalStorageService } from './components/shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  AuthFacdes = inject(AuthFacdes)
  localStorageService = inject(LocalStorageService);

  title = 'main title';
  token: string | null = null

  ngOnInit(): void {
    this.token = this.localStorageService.getData(LocalStorageKey.TOKEN)
    if (this.token) {
      this.AuthFacdes.login(this.token)
    }
  }
}
