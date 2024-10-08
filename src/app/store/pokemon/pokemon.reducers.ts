import { ActionReducer, createReducer, on } from "@ngrx/store";
import { adapter, initialState, PokemonState } from "./pokemon.state";
import { addPokemon, deletePokemon } from "./pokemon.actions";

export const pokemonReducers: ActionReducer<PokemonState> = createReducer(
  initialState,
  on(addPokemon, (state: PokemonState, { name}) =>
    adapter.addOne(name, state)
  ),
  on(deletePokemon, (state: PokemonState, { name }) =>
    adapter.removeOne(name, state)
  )
)
