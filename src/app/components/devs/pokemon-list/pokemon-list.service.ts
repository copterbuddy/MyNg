import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon, PokemonListResponse } from './pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonList = signal<Pokemon[]>([]);

  constructor(private http: HttpClient) { }

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
