import { Component } from '@angular/core';
import { Categorie } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  categ:string='';
  data:Categorie[] =[];
  constructor(private dataCategorie: CategorieService, private router: Router) { }
  
  ngOnInit() {
    this.dataCategorie.getCategorie()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data); 
    });
  }
//   update(x:string){
// this.categ=x;
//   this.router.navigate(['.', { parametre: this.categ }], { relativeTo: this.route });

//   }
public navigateToSection(section: string) {
  this.router.navigate(["/"]);
  window.location.hash = '';
  window.location.hash = section;
}
}
