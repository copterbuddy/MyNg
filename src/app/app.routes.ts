import { Routes } from "@angular/router";
import { DevsComponent } from "./components/devs/devs.component";
import { SetTitleComponent } from "./components/devs/set-title/set-title.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/devs',
    pathMatch: 'full',
    title: 'devs'
  },
  {
    path: 'devs',
    component: DevsComponent
  },
  {
    path: 'devs/set-title',
    component: SetTitleComponent
  }
]
