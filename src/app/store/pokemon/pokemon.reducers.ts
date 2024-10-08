import { ActionReducer, createReducer, on } from "@ngrx/store";
import { adapter, initialState, PokemonState } from "./pokemon.state";
import { addPokemon, deletePokemon } from "./pokemon.actions";

export const pokemonReducers: ActionReducer<PokemonState> = createReducer(
  initialState,
  on(addPokemon, (state: PokemonState, { pokemon}) =>
    adapter.addOne(pokemon, state)
  ),
  on(deletePokemon, (state: PokemonState, { name }) =>
    adapter.removeOne(name, state)
  )
)
