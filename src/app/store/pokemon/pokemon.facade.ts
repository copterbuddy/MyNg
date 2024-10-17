import { addPokemon } from './pokemon.actions';
import { Pokemon } from './../../components/pokemon-shop/pokemon-shop.model';
import { Store } from '@ngrx/store';
import { inject, Injectable } from "@angular/core";
import { count, map, Observable } from 'rxjs';
import { selectPokemon } from './pokemon.selectors';

@Injectable({
  providedIn: 'root',
})
export class PokemonFacade {
  private readonly store: Store = inject(Store)

  getPokemonList(): Observable<Pokemon[]> {
    return this.store.select(selectPokemon)
  }

  getPokemonTotal(): Observable<number> {
    return this.store.select(selectPokemon).pipe(
      map((pokemon) => pokemon.length)
    )
  }

  addPokemon(pokemon: Pokemon) {
    this.store.dispatch(addPokemon({ pokemon }))
  }
}
