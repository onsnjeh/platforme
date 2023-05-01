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

  // Crée un nouveau Article
  // create(article: Article): Observable<Article> {
  //   return this.http.post<Article>(`${this.baseUrl}`, article);
  // }

  // // Met à jour un Article existant
  // update(id: number, article: Article): Observable<Article> {
  //   return this.http.put<Article>(`${this.baseUrl}/${id}`, article);
  // }

  // // Supprime un Article existant
  // delete(id: number): Observable<Article> {
  //   return this.http.delete<Article>(`${this.baseUrl}/${id}`);
  // }


}

