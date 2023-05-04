import { Injectable } from '@angular/core';
import { Article } from '../../models/article.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:3000/article'; // URL de l'API json-server

  constructor(private http: HttpClient) { }

// Récupère tous les Article 
getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(`${this.baseUrl}`);
}


  // Récupère tous les Article par categorie
  getArticlesByCategorie(categorie: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}?categorie=${categorie}`);
  }


  // Récupère un Article par son id
  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }

  searchArticles(recherche:string,categorie:string,type:string,theme:string,date_publication:string)
  {
    let url = `${this.baseUrl}?`;
    if (recherche) {
      url += `q=${recherche}&`;
    }
    if (categorie) {
      url += `categorie=${categorie}&type=${type}&theme=${theme}&`;
    }
    if (date_publication) {
      url += `date_publication=${date_publication}&`;
    }
   return this.http.get<Article[]>(url)
  }
  // Récupère un Article par son categorie , type et theme
//   getArticlesByCategorieTypeAndTheme(categorie: string, type: string, theme: string): Observable<Article[]> {
//     const query = `?categorie=${categorie}&type=${type}&theme=${theme}`;
//    return this.http.get<Article[]>(`${this.baseUrl}${query}`)
// }

// searchArticles(keyword: string): Observable<Article[]> {
//   const searchUrl = `${this.baseUrl}?q=${keyword}`;
//   return this.http.get<Article[]>(searchUrl);
// }

}

