import { Pokemon } from './../pokemon-shop.model';
import { addPokemon } from './../../../store/pokemon/pokemon.actions';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
  viewChild
} from '@angular/core';
import {  PokemonDetail } from '../pokemon-shop.model';
import { RouterLink } from '@angular/router';
import { PokemonShopService } from '../pokemon-shop.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { Store } from '@ngrx/store';
import { PokemonFacade } from 'src/app/store/pokemon/pokemon.facade';

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
          <a (click)="onClickedBuy()" class="btn btn-primary">Buy</a>
        </div>
      </div>
    </app-loader>

  `,
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef)
  private readonly pokemonFacade: PokemonFacade = inject(PokemonFacade)
  pokemon = input.required<Pokemon>()
  loaderComponent = viewChild<LoaderComponent | undefined>('loader')
  pokemonService = inject(PokemonShopService)
  pokemonDetail = signal<PokemonDetail | null>(null)
  loading = computed(() => this.pokemonDetail() == null)

  constructor(){}

  ngOnInit(): void{
    this.getPokemonImage()
  }

  getPokemonImage(): void{
    let sub = this.pokemonService.getPokemonDetail(this.pokemon().name).subscribe({
      next: (detail) => {
        this.pokemonDetail.set(detail)
        this.loaderComponent()?.isLoading.set(false);
      },
      error: () => {
        this.loaderComponent()?.isLoading.set(false);
      }
    })

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe()
    })
  }

  onClickedBuy(){
    this.pokemonFacade.addPokemon(this.pokemon())
  }
}
