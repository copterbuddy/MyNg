import { Pokemon } from './../../components/pokemon-shop/pokemon-shop.model';
import { createAction, props } from "@ngrx/store"

export const pokemonKey = '[Pokemon]'

export const addPokemon = createAction(
  `${pokemonKey} Add Pokemon`,
  props<{pokemon: Pokemon}>()
)

export const deletePokemon = createAction(
  `${pokemonKey} Delete Pokemon`,
  props<{name: string}>()
)

export const addPokemonSuccess = createAction(
  `${pokemonKey} Add Pokemon Success`,
)

export const addPokemonError = createAction(
  `${pokemonKey} Add Pokemon Error`,
)
