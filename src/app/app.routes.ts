import { Routes } from "@angular/router";
import { SetTitleComponent } from "./components/set-title/set-title.component";
import { OutputDynamicContentWithStringComponent } from "./components/output-dynamic-content-with-string/output-dynamic-content-with-string.component";
import { DisplayImageComponent } from "./components/display-image/display-image.component";
import { GetterFunctionComponent } from "./components/getter-function/getter-function.component";
import { EmitEventByNgComponent } from "./components/emit-event-by-ng/emit-event-by-ng.component";
import { PokemonShopComponent } from "./components/pokemon-shop/pokemon-shop.component";
import { MyPokemonComponent } from "./components/pokemon-shop/my-pokemon/my-pokemon.component";

export const routes: Routes = [
  {
    path: '',
    component: PokemonShopComponent,
    pathMatch: 'full',
    title: 'pokemon',
  },
  {
    path: 'my-pokemon',
    component: MyPokemonComponent,
    title: 'my pokemon'
  },
  {
    path: 'set-title',
    component: SetTitleComponent
  },
  {
    path: 'output-dynamic-content-with-string',
    component: OutputDynamicContentWithStringComponent
  },
  {
    path: 'display-image',
    component: DisplayImageComponent
  },
  {
    path: 'getter-function',
    component: GetterFunctionComponent
  },
  {
    path: 'emit-event-by-ng',
    component: EmitEventByNgComponent
  }
]
