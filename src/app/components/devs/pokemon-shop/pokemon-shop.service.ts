import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon, PokemonListResponse } from './pokemon-shop.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonShopService {
  pokemonList = signal<Pokemon[]>([]);

  constructor(private readonly http: HttpClient) { }

  getPokemons(){
    return this.http
      .get<PokemonListResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      )
  }

  getPokemonDetail(pokemonName: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  }
}
