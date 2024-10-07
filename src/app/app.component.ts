import { Component } from '@angular/core';
import {
  RouterOutlet,
} from '@angular/router';
import { PokemonMenuComponent } from './components/shared/pokemon-menu/pokemon-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'main title';
}
