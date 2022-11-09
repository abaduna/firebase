import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SharedModule } from './componentes/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
