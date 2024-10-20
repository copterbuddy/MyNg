import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { Appstate } from "..";
import { PokemonState } from "./pokemon.state";
import { Pokemon } from "src/app/components/pokemon-shop/pokemon-shop.model";

export const selectPokemonFeature: MemoizedSelector<Appstate, PokemonState> = createFeatureSelector<PokemonState>('pokemon')

export const selectPokemon: MemoizedSelector<Appstate, Pokemon[]> =
createSelector(
  selectPokemonFeature,
  (state: PokemonState): Pokemon[] =>
    state.pokemon
)
