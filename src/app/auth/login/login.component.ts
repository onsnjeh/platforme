import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/core/services/compte/compte.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private compteService: CompteService) {}

  login() {
    this.compteService.getByEmail(this.email).subscribe(users => {
      if (users.length > 0 && users[0].password === this.password) {
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        this.router.navigate(['/']);
      } else {
        alert('Invalid email or password');
      }
    });
  }


//   loginForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService
//   ) { }

//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       const email = this.loginForm.get('email').value;
//       const password = this.loginForm.get('password').value;
//       this.authService.loginWithEmail(email, password);
//     }
//   }

//   loginWithGoogle() {
//     this.authService.loginWithGoogle();
//   }

//   loginWithFacebook() {
//     this.authService.loginWithFacebook();
//   }
// }
  }
