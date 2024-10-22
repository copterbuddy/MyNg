import { Routes } from "@angular/router";
import { PokemonShopComponent } from "./components/pokemon-shop/pokemon-shop.component";
import { authGuard } from "./components/shared/auth.guard";

export const routes: Routes = [
  {
    path: '',
    component: PokemonShopComponent,
    pathMatch: 'full',
    title: 'pokemon',
  },
  {
    path: 'my-pokemon',
    loadComponent: () => import('./components/my-pokemon/my-pokemon.component').then(m => m.MyPokemonComponent),
    title: 'my pokemon',
    canActivate: [authGuard],
  }
]
