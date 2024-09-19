import { Routes } from "@angular/router";
import { DevsComponent } from "./components/devs/devs.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dev',
    pathMatch: 'full'
  },
  {
    path: 'dev',
    component: DevsComponent
  }
]
