import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Categorie} from 'src/app/core/models/categorie.model';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/core/services/categorie.service';
@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit{
  @Output() categorieSelected = new EventEmitter<string>();
  categories!: Categorie[];

  constructor(private categorieService: CategorieService , private router : Router) { }

  ngOnInit() {
    this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  selectCategorie(categorieName: string) {
    this.categorieSelected.emit(categorieName);
  }

  goToCart(name: string): void {
    this.router.navigate([`/categorie/${name}`]);
  
  }

}
