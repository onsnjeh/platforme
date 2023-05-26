import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: CompteService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['client', Validators.required],
    });
  }

  onSubmit(): void {
    const compte: Compte = {
      id: 0,
      ...this.registerForm.value,
    };
    this.authService.register(compte).subscribe(
      (newCompte: Compte) => {
        console.log('Compte registered successfully', newCompte);
      },
      error => {
        console.log('Registration failed', error);
      }
    );
  }
}
