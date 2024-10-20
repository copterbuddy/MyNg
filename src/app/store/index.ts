import { AuthState } from "./auth/auth.state";
import { PokemonState } from "./pokemon/pokemon.state";

export interface Appstate{
  pokemon?: PokemonState,
  auth?: AuthState
}
