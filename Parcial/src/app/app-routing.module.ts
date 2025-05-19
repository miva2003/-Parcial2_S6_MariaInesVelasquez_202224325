import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerolineaListComponent } from './aerolineas/aerolinea-list/aerolinea-list.component';

const routes: Routes = [
  {path :'', component: AerolineaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
