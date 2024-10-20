import { ActionReducer, createReducer, on } from '@ngrx/store';
import { initialState, PokemonState } from './pokemon.state';
import { addPokemon, deletePokemon } from './pokemon.actions';

export const pokemonReducers: ActionReducer<PokemonState> = createReducer(
  initialState,
  on(addPokemon, (state: PokemonState, { pokemon }) => ({
    ...state,
    pokemon: state.pokemon.some((p) => p.name === pokemon.name)
      ? state.pokemon
      : [...state.pokemon, pokemon],
  })),
  on(deletePokemon, (state: PokemonState, { name }) => ({
    ...state,
    pokemon: state.pokemon.filter((pokemon) => pokemon.name !== name),
  }))
);
