import { Routes } from "@angular/router";
import { DevsComponent } from "./components/devs/devs.component";
import { SetTitleComponent } from "./components/devs/set-title/set-title.component";
import { OutputDynamicContentWithStringComponent } from "./components/devs/output-dynamic-content-with-string/output-dynamic-content-with-string.component";
import { DisplayImageComponent } from "./components/devs/display-image/display-image.component";
import { GetterFunctionComponent } from "./components/devs/getter-function/getter-function.component";
import { EmitEventByNgComponent } from "./components/devs/emit-event-by-ng/emit-event-by-ng.component";
import { PokemonListComponent } from "./components/devs/pokemon-list/pokemon-list.component";

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
    component: PokemonListComponent,
    title: 'pokemon'
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
