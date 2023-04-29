import {  Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


export const AuthRoutingModule: Routes = [
  {path:"auth",component:LoginComponent},
  {path:"sign-up",component:RegisterComponent},
  {path:"forget-pass",component:ForgetPasswordComponent},
  {path:"reset-pass",component:ResetPasswordComponent}
 
  
]
