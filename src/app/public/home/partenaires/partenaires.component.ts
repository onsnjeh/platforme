import { Component } from '@angular/core';
import {Partenaire} from 'src/app/core/models/partenaire.model'
import { PartenairesService } from 'src/app/core/services/partenaires.service';
@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent {
  data!:Partenaire[];
  constructor(private dataPartenaire: PartenairesService) { }
  
  ngOnInit() {
    this.dataPartenaire.getPartenaire()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
}
