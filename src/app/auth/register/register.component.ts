import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/core/services/compte.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id: number=0 ;
  nom: string ='';
  prenom: string ='' ;
  email: string ='';
  role: string ='';
  password: string ='';


constructor(private router: Router, private compteService: CompteService) {}

signup() {
  const compte = { id: this.id,nom: this.nom, email: this.email, password: this.password,   prenom:this.  prenom, role:this.role };
  this.compteService.create(compte).subscribe(() => {
    this.router.navigate(['/login']);
  });
}
}
