import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { Pokemon } from '../pokemon-shop.model';
import { PokemonShopService } from '../pokemon-shop.service';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.css'
})
export class PokemonCardsComponent  implements OnInit {
  destroyRef = inject(DestroyRef)
  pokemonList = signal<Pokemon[]>([]);
  pokemonService = inject(PokemonShopService)

  constructor(){}

  ngOnInit(): void {
    let sub = this.pokemonService.getPokemons()
    .subscribe({
      next: (pokemonList) => {
        this.pokemonList.update((value) => [...value, ...pokemonList.results]);
      },
    });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }
}
