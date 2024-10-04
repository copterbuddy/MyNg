import { Sprites } from '../pokemon-shop.model';
import { Component, computed, input, OnInit, signal } from '@angular/core';
import { Pokemon, PokemonDetail } from '../pokemon-shop.model';
import { RouterLink } from '@angular/router';
import { PokemonShopService } from '../pokemon-shop.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit {
  pokemon = input.required<Pokemon>()
  pokemonDetail = signal<PokemonDetail | null>(null)

  constructor(private pokemonService: PokemonShopService){}

  ngOnInit(): void{
    this.getPokemonImage()
  }

  getPokemonImage(): void{
    this.pokemonService.getPokemonDetail(this.pokemon().name).subscribe({
      next: (detail) => {
        this.pokemonDetail.set(detail)
        console.log(this.pokemonDetail()?.sprites)
      }
    })
  }
}
