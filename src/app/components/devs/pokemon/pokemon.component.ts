import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>pokemon works!</p>
    @for(item of pokemonList(); track item.name) {
    <div>
      <img [src]="image()" alt="user" />
      <a [routerLink]="item.url">{{ item.name }}</a>
    </div>
    }
    <div>
      <label>{{ total() }}</label>
    </div>
  `,
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  pokemonList = signal<Pokemon[]>([]);
  total = signal<number>(0);
  image = signal<string>('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sub = this.http.get<PokemonResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      )
      .subscribe((data) => {
        console.log(data);
        this.pokemonList.set(data.results);
        this.total.set(data.count);
      });
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
