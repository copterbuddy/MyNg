import { Pokemon } from './../../components/pokemon-shop/pokemon-shop.model';
import { createAction, props } from "@ngrx/store"

export const pokemonKey = '[Pokemon]'

export const addPokemon = createAction(
  `${pokemonKey} Add Pokemon`,
  props<{name: Pokemon}>()
)

export const deletePokemon = createAction(
  `${pokemonKey} Delete Pokemon`,
  props<{name: string}>()
)
