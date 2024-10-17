import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { PokemonMenuComponent } from '../shared/pokemon-menu/pokemon-menu.component';
import { PokemonFacade } from 'src/app/store/pokemon/pokemon.facade';
import { Pokemon } from './pokemon-shop.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    RouterLink,
    PokemonCardComponent,
    PokemonMenuComponent,
    RouterOutlet,
    PokemonCardsComponent,
    AsyncPipe
  ],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div style="margin-left: 5px;">
        <a class="nav-link disabled">My Pokemon: {{ pokemonFacade.getPokemonTotal() | async }}ea</a>
      </div>
    </nav>
    <div class="overflow-hidden overflow-x-hidden overflow-y-auto">
      <app-pokemon-cards></app-pokemon-cards>
    </div>
  `,
  styleUrl: './pokemon-shop.component.css'
})
export class PokemonShopComponent implements OnInit {
  destroyRef = inject(DestroyRef)
  pokemonFacade = inject(PokemonFacade)
  // myTotalPokemon: number = 0

  ngOnInit(): void{
    this.destroyRef.onDestroy(() => {

    })
  }
}
