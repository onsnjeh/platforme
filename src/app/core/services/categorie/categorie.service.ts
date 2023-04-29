import { Injectable } from '@angular/core';
import { Categorie } from 'src/app/core/models/categorie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = '  http://localhost:3000/categorie';

  constructor(private http: HttpClient) {}

  getCategorie() {
    return this.http.get<Categorie []>(this.baseUrl);
  }

  getLimitCategorie() {
    return this.http.get<Categorie []>(`${this.baseUrl}?_limit=3`);
  }

  
  getCategoryByName(name:string):Observable<Categorie>{
    return this.http.get<Categorie>(`${this.baseUrl}?name=${name}`)

  }
}
