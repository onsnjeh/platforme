import { Component, Input, OnInit } from '@angular/core';
import { Offre } from 'src/app/core/models/offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
@Input() item : Offre;
constructor() {
  this.item = {
    id: 0 ,
    titre: '' ,
    periode: '' , 
    prix: '' , 
    description: '' ,
    dateDebut : '' ,
    dateFin : '' ,
  };
}
ngOnInit(): void {
  console.log(this.item)
}
}
