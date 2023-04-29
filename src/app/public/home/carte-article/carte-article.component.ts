import { Component, OnInit, Input } from '@angular/core';
import {Article} from 'src/app/core/models/article.model'
@Component({
  selector: 'app-carte-article',
  templateUrl: './carte-article.component.html',
  styleUrls: ['./carte-article.component.css']
})
export class CarteArticleComponent implements OnInit{
@Input() item:Article
constructor() {
  this.item = {
    id:0,
    titre:'',
    reference: 0,
    date_publication: '',
    abstract: '',
    dateCreate: new Date,
    tags: [] ,
    categorie: '',
    type: '',
    theme: '',
    fichier:'',
    textFichier: '',
  };
}
ngOnInit(): void {
  console.log(this.item);
}
}
