import { Component } from '@angular/core';
import {Article} from 'src/app/core/models/article.model'
import { ArticleService } from 'src/app/core/services/article.service';
@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent {
  data:Article[] =[];
  constructor(private dataArticle: ArticleService) { }
  
  ngOnInit() {
    this.dataArticle.getArticles()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
}
