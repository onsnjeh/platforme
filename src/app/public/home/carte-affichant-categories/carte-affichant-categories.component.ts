import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Article } from "src/app/core/models/article.model";
import { Categorie } from "src/app/core/models/categorie.model";
import { ArticleService } from "src/app/core/services/article.service";
import { CategorieService } from "src/app/core/services/categorie.service";

@Component({
  selector: 'app-carte-affichant-categories',
  templateUrl: './carte-affichant-categories.component.html',
  styleUrls: ['./carte-affichant-categories.component.css']
})

export class CartesAffichantCategoriesComponent {
  data:Categorie[] =[];
  articles :Article[]=[];

  constructor(private dataCategorie: CategorieService, private router: Router, private articleService : ArticleService) { }
  
  ngOnInit() {
    this.dataCategorie.getLimitCategorie()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });

    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }
  
  goToCart(name: string): void {
    // this.nameColor = 'red';
    this.router.navigate([`/categorie/${name}`]);
    // this.carteSelectionneeNom = this.carts.name;
   //,{ queryParams: { name: this.carts.name } }
  }

  getTotalByCategorie(categorie: string) {
    const articlesInCategorie = this.articles.filter(article => article.categorie === categorie);
    return articlesInCategorie.length;
}

}
