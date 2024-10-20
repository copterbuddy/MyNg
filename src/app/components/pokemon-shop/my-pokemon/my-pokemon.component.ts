import { Pokemon } from 'src/app/components/pokemon-shop/pokemon-shop.model';
import { PokemonFacade } from 'src/app/store/pokemon/pokemon.facade';
import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-my-pokemon',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.css',
  host: {
    class: "container-fluid"
  }
})
export class MyPokemonComponent implements OnInit {
  DestroyRef = inject(DestroyRef)

  PokemonFacade = inject(PokemonFacade)
  pokemon$ = this.PokemonFacade.getPokemonList()
  pokemonDisplayList: PokemonDisplay[] = []

  ngOnInit(): void {
    let sub = this.pokemon$.subscribe({
      next: (pokemon) => {
        this.pokemonDisplayList = pokemon.map((p, index) => {
          const pokemonDisplay: PokemonDisplay = {
            name: p.name,
            url: p.url,
            index: index + 1
          };
          return pokemonDisplay
        })
    }})

    this.DestroyRef.onDestroy(() => {
      sub.unsubscribe()
    })
  }
  HandleClickedDeletePokemon(name: string) {
    this.PokemonFacade.deletePokemon(name)
  }
}

interface PokemonDisplay extends Pokemon {
  index: number
}
