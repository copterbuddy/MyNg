import {
  Component
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardsComponent } from "./pokemon-cards/pokemon-cards.component";
import { PokemonMenuComponent } from '../shared/pokemon-menu/pokemon-menu.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, PokemonCardComponent, PokemonMenuComponent, RouterOutlet, PokemonCardsComponent],
  template: `
    <div class="overflow-hidden overflow-x-hidden overflow-y-auto">
      <app-pokemon-cards></app-pokemon-cards>
    </div>
  `,
  styleUrl: './pokemon-shop.component.css',
})
export class PokemonShopComponent{}
