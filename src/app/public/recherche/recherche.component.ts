import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import {Article} from 'src/app/core/models/article.model'
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent  {
 
  selectedValue: string = '';
  tags: string[]=[];
recherche = new FormGroup ({
    motsCles : new FormControl(),
    // les variables a entrer
    date: new FormControl()
  }
  );
  constructor() {     }
  
 
  onSubmit() {
    
  
   
  }
 
    onSelectedValueChange(event: any) {
      this.selectedValue = event.target.value; // Mise à jour de la valeur sélectionnée à chaque changement de sélection
      console.log(this.selectedValue);
      this.tags.push(this.selectedValue); 
      console.log(this.tags);
      // Affichage de la valeur sélectionnée dans la console du navigateur
    }
    supprimerLi(tag:string=''){
      const index = this.tags.indexOf(tag);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
      return this.tags;
    }  

}
