import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../../models/compte.model';
//import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:3000/compte'; // URL de l'API json-server

  constructor(private http: HttpClient) { }

  getItemsByRole(role: string): Observable<Compte[]> {
    return this.http.get<Compte[]>(`http://localhost:3000/compte?role=${role}`);
  }
    
  // Récupère tous les Comptes
  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}`);
  }

  // Récupère un Compte par son id
  getById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau Compte
  create(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(`${this.baseUrl}`, compte);
  }

  // Met à jour un Compte existant
  update(id: number, compte: Compte): Observable<Compte> {
    return this.http.put<Compte>(`${this.baseUrl}/${id}`, compte);
  }

  // Supprime un Compte existant
  delete(id: number): Observable<Compte> {
    return this.http.delete<Compte>(`${this.baseUrl}/${id}`);
  }
 // Récupère un Compte par son email
 getByEmail(email: string): Observable<any> {
  return this.http.get(`${this.baseUrl}?email=${email}`);
}
// constructor(
//   private afAuth: AngularFireAuth
// ) {}

// loginWithEmail(email: string, password: string) {
//   return this.afAuth.signInWithEmailAndPassword(email, password);
// }

// loginWithGoogle() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   return this.afAuth.signInWithPopup(provider);
// }

// loginWithFacebook() {
//   const provider = new firebase.auth.FacebookAuthProvider();
//   return this.afAuth.signInWithPopup(provider);
// }
}

