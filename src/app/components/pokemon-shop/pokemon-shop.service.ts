import { HttpClient } from '@angular/common/http';
import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import { concatMap, delay, map, Subscription, timeout } from 'rxjs';
import { Pokemon, PokemonDetail, PokemonListResponse } from './pokemon-shop.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonShopService {
  http = inject(HttpClient)
  constructor() { }

  getPokemons(){
    return this.http
      .get<PokemonListResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      )
  }

  getPokemonDetail(pokemonName: string){
    return  this.http.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  }
}
