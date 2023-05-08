
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, Tag } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent {
 
  @Input() articles!: Article[];
  @Input() categories!: string;

  page = 1; // La page courante
  pageSize = 5; // Nombre de Articles par page

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categories'] && !changes['categories'].firstChange) {
      this.getArticle();
    }
  }

  getArticle() {
    if (this.categories) {
      this.articleService.getArticlesByCategorie(this.categories)
        .subscribe(articles => this.articles = articles);
    } else {
      this.articleService.getArticles()
        .subscribe(articles => this.articles = articles);
    }
  }

  // Retourne les Articles à afficher pour la page courante
  get ArticlesToShow(): Article[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.articles.slice(startIndex, startIndex + this.pageSize);
  }

  // Passe à la page suivante
  nextPage() {
    if (this.page < this.pageCount) {
      this.page++;
    }
  }

  // Passe à la page précédente
  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  // Retourne le nombre total de pages
  get pageCount(): number {
    return Math.ceil(this.articles.length / this.pageSize);
  }

  //recupere tag 
  // getTagName(tagId: number): string {
  //   const tag = this.tags.find(t => t.id === tagId);
  //   return tag ? tag.name : '';
  // }


}
