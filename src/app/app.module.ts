import { DevsComponent } from './components/devs/devs.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/devs/header/header.component';
import { SetTitleComponent } from './components/devs/set-title/set-title.component';
import { OutputDynamicContentWithStringComponent } from './components/devs/output-dynamic-content-with-string/output-dynamic-content-with-string.component';

@NgModule({
  declarations: [
    AppComponent,
    DevsComponent,
    HeaderComponent,
    SetTitleComponent,
    OutputDynamicContentWithStringComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    NgbModule,
    RouterLink
  ],
  providers: [provideRouter(routes),RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
