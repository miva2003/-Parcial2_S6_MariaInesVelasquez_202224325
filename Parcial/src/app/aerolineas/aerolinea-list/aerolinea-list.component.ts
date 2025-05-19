import { Component, OnInit } from '@angular/core';
import { AerolineasService } from '../aerolineas.service';
import { Aerolinea } from '../aerolinea';

@Component({
  standalone: false,
  selector: 'app-aerolinea-list',
  templateUrl: './aerolinea-list.component.html',
  styleUrls: ['./aerolinea-list.component.css']
})
export class AerolineaListComponent implements OnInit {

  aerolineas:Array<Aerolinea> = [];
  selected: boolean = false;
  selectedAerolinea!: Aerolinea;

  onSelect(aerolinea: Aerolinea): void {
    this.selected = true;
    this.selectedAerolinea = aerolinea;
  }

  constructor(private aerolineasService: AerolineasService) { }

   getAerolineas(): Array<Aerolinea> {
    this.aerolineasService.getAerolineas().subscribe((aerolineas: Array<Aerolinea>) => {
      this.aerolineas = aerolineas;
    });
    return this.aerolineas;
  }
  ngOnInit() {
    this.aerolineas = this.getAerolineas();
  }

}
