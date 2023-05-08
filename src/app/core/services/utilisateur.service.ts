import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  baseUrl = 'http://localhost:3000/utilisateur';

  constructor(private http: HttpClient) {}

  getUtilisateur() {
    return this.http.get<Utilisateur []>(this.baseUrl);
  }
  isAuthenticated(){return false}



}