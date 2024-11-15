import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import {
  RouterOutlet,
} from '@angular/router';
import { PokemonMenuComponent } from './components/shared/pokemon-menu/pokemon-menu.component';
import { LocalStorageKey, LocalStorageService } from './components/shared/services/localStorage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { LoginService } from './components/shared/modal/login/login.service';
import { PokemonFacade } from './store/pokemon/pokemon.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonMenuComponent, RouterOutlet],
  template: `
  <div class="d-flex flex-row">
    <app-pokemon-menu
      class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100"
    ></app-pokemon-menu>
    <router-outlet />
  </div>
  `,
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
