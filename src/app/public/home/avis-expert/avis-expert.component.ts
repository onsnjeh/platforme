import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/core/models/utilisateur.model';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

@Component({
  selector: 'app-avis-expert',
  templateUrl: './avis-expert.component.html',
  styleUrls: ['./avis-expert.component.css']
})
export class AvisExpertComponent {
  data:Utilisateur[] =[];
  constructor(private dataUser: UtilisateurService) { }
  
  ngOnInit() {
    this.dataUser.getUtilisateur()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
}
