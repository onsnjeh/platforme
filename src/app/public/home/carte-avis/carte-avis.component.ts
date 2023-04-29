import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur} from 'src/app/core/models/utilisateur.model';
@Component({
  selector: 'app-carte-avis',
  templateUrl: './carte-avis.component.html',
  styleUrls: ['./carte-avis.component.css']
})
export class CarteAvisComponent implements OnInit{
  @Input() item : Utilisateur;
  constructor() {
    this.item = {
      firstname: '',
    lastname : '',
    birthdate : '',
    job : '',
    profile : '',
    message:'',
      
    };
  }
  ngOnInit(): void {
    console.log(this.item);
  }
}
