import { Routes } from "@angular/router";
import { DevsComponent } from "./components/devs/devs.component";
import { SetTitleComponent } from "./components/devs/set-title/set-title.component";
import { OutputDynamicContentWithStringComponent } from "./components/devs/output-dynamic-content-with-string/output-dynamic-content-with-string.component";
import { DisplayImageComponent } from "./components/devs/display-image/display-image.component";
import { GetterFunctionComponent } from "./components/devs/getter-function/getter-function.component";
import { EmitEventByNgComponent } from "./components/devs/emit-event-by-ng/emit-event-by-ng.component";
import { PokemonShopComponent } from "./components/devs/pokemon-shop/pokemon-shop.component";
import { MyPokemonComponent } from "./components/devs/pokemon-shop/my-pokemon/my-pokemon.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/devs',
    pathMatch: 'full',
    title: 'main'
  },
  {
    path: 'devs',
    component: DevsComponent,
    title: 'devs'
  },
  {
    path: 'devs/pokemon',
    component: PokemonShopComponent,
    title: 'pokemon'
  },
  {
    path: 'devs/pokemon/my-pokemon',
    component: MyPokemonComponent,
    title: 'my pokemon'
  },
  {
    path: 'devs/set-title',
    component: SetTitleComponent
  },
  {
    path: 'devs/output-dynamic-content-with-string',
    component: OutputDynamicContentWithStringComponent
  },
  {
    path: 'devs/display-image',
    component: DisplayImageComponent
  },
  {
    path: 'devs/getter-function',
    component: GetterFunctionComponent
  },
  {
    path: 'devs/emit-event-by-ng',
    component: EmitEventByNgComponent
  }
]
