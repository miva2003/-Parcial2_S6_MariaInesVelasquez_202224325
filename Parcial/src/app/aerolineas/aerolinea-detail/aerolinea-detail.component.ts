import { Component, OnInit, Input } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineasService } from '../aerolineas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  standalone: false,
  selector: 'app-aerolinea-detail',
  templateUrl: './aerolinea-detail.component.html',
  styleUrls: ['./aerolinea-detail.component.css']
})
export class AerolineaDetailComponent implements OnInit {

  aeroId!: string;
  @Input() Aerolinea!: Aerolinea;
  constructor(private AerolineasService:AerolineasService, private route: ActivatedRoute) { }

  getAerolinea() {
    this.AerolineasService.getAerolinea(this.aeroId).subscribe(apiData => {
      this.Aerolinea = apiData;
    })
  }
    ngOnInit() {
      if(this.Aerolinea === undefined){
      this.aeroId = this.route.snapshot.paramMap.get('id')!
      if(this.aeroId){
        this.getAerolinea();
      }
    }
  }

}
