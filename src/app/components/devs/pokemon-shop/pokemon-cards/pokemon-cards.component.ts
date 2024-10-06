import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon-shop.model';
import { PokemonShopService } from '../pokemon-shop.service';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.css'
})
export class PokemonCardsComponent  implements OnInit, OnDestroy {
  sub = new Subscription();
  pokemonList = signal<Pokemon[]>([]);

  constructor(
    private readonly pokemonService: PokemonShopService
  )
  {}

  ngOnInit(): void {
    this.sub = this.pokemonService.getPokemons()
    .subscribe({
      next: (pokemons) => {
        this.pokemonList.update((value) => [...value, ...pokemons.results]);
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
