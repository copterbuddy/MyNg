export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  sprites?: Sprites
}

export interface Sprites {
  back_default?: string
}
