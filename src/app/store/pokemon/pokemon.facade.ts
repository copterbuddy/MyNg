import { addPokemon } from './pokemon.actions';
import { Pokemon } from './../../components/pokemon-shop/pokemon-shop.model';
import { Store } from '@ngrx/store';
import { inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { selectPokemon } from './pokemon.selectors';

@Injectable({
  providedIn: 'root',
})
export class PokemonFacade {
  private readonly store: Store = inject(Store)
  readonly pokemon$: Observable<Pokemon[]> = this.store.select(selectPokemon)

  addPokemon(pokemon: Pokemon) {
    this.store.dispatch(addPokemon({ pokemon }))
  }
}
