import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AerolineasModule } from './aerolineas/aerolineas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AerolineasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
