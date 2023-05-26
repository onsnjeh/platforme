import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:3000/compte'; // URL de l'API json-server

  constructor(private http: HttpClient) { }

  getItemsByRole(role: string): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}?role=${role}`);
  }
    
  // Récupère tous les Comptes
  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}`);
  }

  // Récupère un Compte par son id
  getById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.baseUrl}/${id}`);
  }

  
  register(Compte: Compte) {
    return this.http.post<Compte>(`${this.baseUrl}`, Compte);
  }

  login(email: string, password: string) {
    return this.http.get<Compte[]>(`${this.baseUrl}?email=${email}&password=${password}`);
  }

  setCurrentCompte(Compte: Compte) {
    localStorage.setItem('currentCompte', JSON.stringify(Compte));
  }

  getCurrentCompte() {
    return JSON.parse(localStorage.getItem('currentCompte') || '{}');
  }

  logout() {
    localStorage.removeItem('currentCompte');
  }


  getProfil(nom:string){
    return this.http.get<Compte>(`${this.baseUrl}?role=${nom}`);

  }

  
  chercherCompte(variable: string): Promise<string> {
    return this.http.get<Compte>(this.baseUrl).toPromise()
      .then((data: any) => {
        const obj = data.find((item: any) => item.role === variable);
        return obj ? obj.nom : null;
      })
      .catch((err: any) => {
        console.error(err);
        return null;
      });
  }

  searchComptes(searchTerm: string, role: string): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}?role=${role}&q=${searchTerm}`);
  }
  
}

