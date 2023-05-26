import { Component } from '@angular/core';
import { Categorie } from 'src/app/core/models/categorie.model';
import { Router } from '@angular/router';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data: Categorie[] = [];

  constructor(private dataCategorie: CategorieService, private router: Router) { }
  
  ngOnInit() {
  this.dataCategorie.getCategories().subscribe((allData) => {
  this.data = allData;
  });
  }
  
  public navigateToSection(sectionId: string) {
  this.router.navigate(["/"]);
  window.location.hash = '';
  window.location.hash = sectionId;
  }
 

}