import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonShopService } from 'src/app/components/pokemon-shop/pokemon-shop.service';
import {
  addPokemon,
  addPokemonError,
  addPokemonSuccess,
} from './pokemon.actions';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs';

export const addPokemon$ = createEffect(
  (
    actions$: Actions = inject(Actions)
  ) => {
    return actions$.pipe(
      ofType(addPokemon),
      map(() => addPokemonSuccess()),
      catchError((error) => {
        console.warn('An error occurred while adding Pokemon:', error);
        return [addPokemonError()];
      })
    );
  },
  { functional: true, dispatch: true }
);
