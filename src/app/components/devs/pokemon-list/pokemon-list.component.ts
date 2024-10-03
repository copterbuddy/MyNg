import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  effect,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { Pokemon } from './pokemon-list.model';
import { PokemonService } from './pokemon-list.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink,PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  pokemonList = signal<Pokemon[]>([]);

  constructor(private readonly pokemonService: PokemonService) {
    effect(() => {
      console.log('effect', this.pokemonList());
    });
  }

  ngOnInit(): void {
    this.sub = this.pokemonService.getPokemons()
    .subscribe({
      next: (pokemons) => {
        this.pokemonList.update((value) => [...value, ...pokemons.results]);
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
