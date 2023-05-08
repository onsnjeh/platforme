import { Component } from "@angular/core";
import { Offre } from "src/app/core/models/offre.model";
import { OffreService } from "src/app/core/services/offre.service";




@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent  {
  data:Offre[] =[];
  constructor(private dataOffre: OffreService) { }
  
  ngOnInit() {
    this.dataOffre.getOffre()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }

  

}
