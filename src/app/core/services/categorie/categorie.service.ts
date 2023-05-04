import { Injectable } from '@angular/core';
import { Categorie, Theme, Type } from 'src/app/core/models/categorie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les catégories
  getCategorie(): Observable<Categorie[]> {
    const url = `${this.baseUrl}categorie`;
    return this.http.get<Categorie[]>(url);
  }

    // Récupérer toutes les catégories
    getTypes(): Observable<Type[]> {
      const url = `${this.baseUrl}type`;
      return this.http.get<Type[]>(url);
    }

      // Récupérer toutes les catégories
      getThemes(): Observable<Theme[]> {
    const url = `${this.baseUrl}theme`;
    return this.http.get<Theme[]>(url);
  }

  // Récupérer les thèmes par rapport à l'id de la catégorie
  getTypesByCategorieName(categorieName: string): Observable<Theme[]> {
    const url = `${this.baseUrl}type?categorieName=${categorieName}`;
    return this.http.get<Type[]>(url);
  }

  // Récupérer les types par rapport à l'id de la catégorie
  getThemesByCategorieName(categorieName: string): Observable<Type[]> {
    const url = `${this.baseUrl}theme?categorieName=${categorieName}`;
    return this.http.get<Theme[]>(url);
  }

  // Récupérer un nombre limité de catégories
  getLimitCategorie(): Observable<Categorie[]> {
    const url = `${this.baseUrl}categorie?_limit=3`;
    return this.http.get<Categorie[]>(url);
  }

  // Récupérer une catégorie par son nom
  getCategoryByName(name: string): Observable<Categorie> {
    const url = `${this.baseUrl}categorie?name=${name}`;
    return this.http.get<Categorie>(url);
  }

}
