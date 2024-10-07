import {
  Component
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonMenuComponent } from "../../shared/pokemon-menu/pokemon-menu.component";
import { PokemonCardsComponent } from "./pokemon-cards/pokemon-cards.component";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, PokemonCardComponent, PokemonMenuComponent, RouterOutlet, PokemonCardsComponent],
  templateUrl: './pokemon-shop.component.html',
  styleUrl: './pokemon-shop.component.css',
})
export class PokemonShopComponent{}
//  implements OnInit, OnDestroy {
//   sub = new Subscription();
//   pokemonList = signal<Pokemon[]>([]);

//   constructor(
//     private readonly pokemonService: PokemonShopService
//   )
//   {}

//   ngOnInit(): void {
//     this.sub = this.pokemonService.getPokemons()
//     .subscribe({
//       next: (pokemons) => {
//         this.pokemonList.update((value) => [...value, ...pokemons.results]);
//       },
//     });
//   }

//   ngOnDestroy(): void {
//     this.sub.unsubscribe();
//   }
// }
