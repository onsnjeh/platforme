import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { Categorie, Theme, Type } from 'src/app/core/models/categorie.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent  {
  
  categories!: Categorie[];
  themes!: Theme[];
  types!: Type[];
@Input()  articles!: Article[];

  selectedCategorieName: string = '';
  selectedThemeName: string = '';
  selectedTypeName: string = '';

  constructor(private categorieService: CategorieService, private articleService: ArticleService,
    private http:HttpClient) { }

  ngOnInit() {
    this.categorieService.getCategories().subscribe(categorie => {
      this.categories = categorie;
    });
    this.articleService.getArticles().subscribe(articles => this.articles = articles);

  }

  onCategorieChange() {
    // Récupérer les thèmes
    this.categorieService.getThemesByCategorieName(this.selectedCategorieName).subscribe((themes) => {
      this.themes = themes;
    });

    // Récupérer les types
    this.categorieService.getTypesByCategorieName(this.selectedCategorieName).subscribe((types) => {
      this.types = types;
    });
  }
  date_publication: string = '';
  recherche: string = '';

  rechercheArticle() {
  this.articleService.searchArticle(this.recherche,
    this.selectedCategorieName,this.selectedTypeName,this.selectedThemeName,
    this.date_publication).subscribe((data: Article[]) => {
      this.articles = data;
    });
  }

  // searchText!: string;
  // selectedRadio!: string;

  // searchArticles(): void {
  //   this.articleService.getArticles().subscribe(articles => {
  //     this.articles = articles.filter(article =>
  //       article.titre.toLowerCase().includes(this.searchText.toLowerCase())
  //       && (this.selectedCategorieName ? article.categorie === this.selectedCategorieName : true)
  //       && (this.selectedTypeName ? article.type === this.selectedTypeName : true)
  //       && (this.selectedThemeName ? article.theme === this.selectedThemeName : true)
  //       && (this.selectedRadio === 'doc-vigeur' ? article.reference !== null : true)
  //       && (this.selectedRadio === 'doc-aborge' ? article.reference === null : true)
  //     );
  //   });
  // }
  // keyword: string = ""; // Ajouter cette propriété

  // searchArticles() {
  //   this.articleService.searchArticles(this.keyword).subscribe(articles => {
  //     this.articles = articles;
  //   });
   
  // }
// search(){
//   this.articleService.getArticlesByCategorieTypeAndTheme(this.selectedCategorieName,this.selectedTypeName,this.selectedThemeName)
//    .subscribe(
//       data => this.articles = data,
//     );
// }
    // onSelectedValueChange(event: any) {
    //   this.selectedValue = event.target.value; // Mise à jour de la valeur sélectionnée à chaque changement de sélection
    //   console.log(this.selectedValue);
    //   this.tags.push(this.selectedValue); 
    //   console.log(this.tags);
    //   // Affichage de la valeur sélectionnée dans la console du navigateur
    // }
    // supprimerLi(tag:string=''){
    //   const index = this.tags.indexOf(tag);
    //   if (index !== -1) {
    //     this.tags.splice(index, 1);
    //   }
    //   return this.tags;
    // }  

}
