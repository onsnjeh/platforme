
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { AuthRoutingModule } from './auth.routing';
// import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
LoginComponent,
RegisterComponent,
ForgetPasswordComponent,
ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutingModule),
  ]
})
export class AuthModule { }
