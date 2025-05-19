import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AerolineasModule } from './aerolineas/aerolineas.module';
import { HttpClientModule } from '@angular/common/http';
import { VuelosModule } from './vuelos/vuelos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AerolineasModule, 
    HttpClientModule, 
    VuelosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
