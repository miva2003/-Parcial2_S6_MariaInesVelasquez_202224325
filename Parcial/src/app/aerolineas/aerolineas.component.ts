import { Component, OnInit } from '@angular/core';
import { Aerolinea } from './aerolinea';

@Component({
  standalone: false,
  selector: 'app-aerolineas',
  templateUrl: './aerolineas.component.html',
  styleUrls: ['./aerolineas.component.css']
})
export class AerolineasComponent implements OnInit {

  aerolineas: Aerolinea[];

  constructor() { }

  getAerolineas(): Aerolinea[] {
    return dataAerolineas;
  }
  ngOnInit() {
    this.aerolineas = this.getAerolineas();
  }

}
