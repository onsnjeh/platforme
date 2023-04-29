import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/core/services/compte/compte.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';
  newPassword: string = '';

  constructor(private router: Router, private compteService: CompteService) {}

  resetPassword() {
    this.compteService.getByEmail(this.email).subscribe(users => {
      if (users.length > 0) {
        const user = users[0];
        user.password = this.newPassword;
        this.compteService.update(user.id, user).subscribe(() => {
          this.router.navigate(['/login']);
        });
      } else {
        alert('Invalid email');
      }
    });
  }
  

}
