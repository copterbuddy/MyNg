import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
