import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineasComponent } from './aerolineas.component';
import { AerolineaDetailComponent } from './aerolinea-detail/aerolinea-detail.component';
import { AerolineaListComponent } from './aerolinea-list/aerolinea-list.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [AerolineasComponent, 
    AerolineaDetailComponent, 
    AerolineaListComponent
  ],

  exports: [AerolineaListComponent],
})
export class AerolineasModule { }
