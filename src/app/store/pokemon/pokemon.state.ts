import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Pokemon } from "src/app/components/pokemon-shop/pokemon-shop.model";

export interface PokemonState  {
  pokemon: Pokemon[]
}

export const initialState: PokemonState = {
  pokemon: []
}
