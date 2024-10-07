import { Sprites } from '../pokemon-shop.model';
import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit,
  Component,
  computed,
  ContentChild,
  contentChild, ContentChildren, effect,
  ElementRef,
  input,
  OnInit, QueryList,
  Signal,
  signal, viewChild, ViewChild
} from '@angular/core';
import { Pokemon, PokemonDetail } from '../pokemon-shop.model';
import { RouterLink } from '@angular/router';
import { PokemonShopService } from '../pokemon-shop.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import {read} from "@popperjs/core";

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink,LoaderComponent],
  template: `
    <app-loader #loader [loadingInput]="loading()">
      <div class="card" style="width: 10rem;height: 20rem;" #pokDetail>
        <img [src]="pokemonDetail()?.sprites?.back_default" class="card-img" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ pokemon().name}}</h5>
          <p class="card-text">{{ pokemon().name}} desc.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </app-loader>

  `,
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit,AfterViewInit {
  pokemon = input.required<Pokemon>()
  pokemonDetail = signal<PokemonDetail | null>(null)
  loading = computed(() => this.pokemonDetail() == null)
  loaderComponent = viewChild<LoaderComponent | undefined>('loader')

  constructor(
    private readonly pokemonService: PokemonShopService,
  )
  {}

  ngOnInit(): void{
    this.getPokemonImage()
  }

  ngAfterViewInit(): void {
  }

  getPokemonImage(): void{

    this.pokemonService.getPokemonDetail(this.pokemon().name).subscribe({
      next: (detail) => {
        this.pokemonDetail.set(detail)
        this.loaderComponent()?.isLoading.set(false);
      },
      error: () => {
        this.loaderComponent()?.isLoading.set(false);
      }
    })
  }


}
