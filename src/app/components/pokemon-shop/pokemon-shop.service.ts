import { LocalStorageKey, LocalStorageService } from './../shared/services/localStorage/local-storage.service';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DestroyRef, effect, inject, Injectable, OnInit, signal } from '@angular/core';
import { PokemonDetail, PokemonListResponse } from './pokemon-shop.model';
import { catchError, map, of, take } from 'rxjs';
import { UserInfo } from 'src/app/store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class PokemonShopService {
  http = inject(HttpClient)
  baseUrl = 'http://localhost:5131'

  getPokemons(){
    return this.http
      .get<PokemonListResponse>(
        `${this.baseUrl}/pokemons`
      ).pipe(
        map((response) => {
          return response.results
        }),
        catchError((error: HttpErrorResponse) => {
          console.warn(error)
          return of([])
        })
      )
  }

  getPokemonDetail(pokemonName: string){
    return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${pokemonName}/detail`, {withCredentials: true})
  }
}
