import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: CompteService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe((Comptes: Compte[]) => {
      if (Comptes.length > 0) {
        const currentCompte = Comptes[0];
        this.authService.setCurrentCompte(currentCompte);
        window.location.href = 'http://localhost:63546/';

      } else {
        console.log('Login failed');
      }
    }, error => {
      console.log('Login failed', error);
    });
  }
}