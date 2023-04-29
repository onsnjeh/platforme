import { Injectable } from '@angular/core';
import { Partenaire } from '../../models/partenaire.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  baseUrl = 'http://localhost:3000/partenaires';

  constructor(private http: HttpClient) {}

  getPartenaire() {
    return this.http.get<Partenaire []>(this.baseUrl);
  }
  mettreAJourPartenaire(partenaire: any) {
    return this.http.put(`http://localhost:3000/partenaires/${partenaire.id}`, partenaire);
  }

  supprimerPartenaire(partenaireId: number) {
    return this.http.delete(`http://localhost:3000/partenaires/${partenaireId}`);
  }
  getImageUrl(): Observable<string> {
    return this.http.get<string>(this.baseUrl);
  }
}
