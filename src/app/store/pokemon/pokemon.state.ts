import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Pokemon } from "src/app/components/pokemon-shop/pokemon-shop.model";

export interface PokemonState extends EntityState<Pokemon>{
  loading: [];
}

export const selectId = ({ name }: Pokemon) => name

export const adapter: EntityAdapter<Pokemon> = createEntityAdapter(
  { selectId }
)

export const initialState: PokemonState = adapter.getInitialState(
  { loading: [] }
)
