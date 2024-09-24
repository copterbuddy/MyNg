import { Routes } from "@angular/router";
import { DevsComponent } from "./components/devs/devs.component";
import { SetTitleComponent } from "./components/devs/set-title/set-title.component";
import { OutputDynamicContentWithStringComponent } from "./components/devs/output-dynamic-content-with-string/output-dynamic-content-with-string.component";
import { DisplayImageComponent } from "./components/devs/display-image/display-image.component";

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
  },
  {
    path: 'devs/output-dynamic-content-with-string',
    component: OutputDynamicContentWithStringComponent
  },
  {
    path: 'devs/display-image',
    component: DisplayImageComponent
  }
]
