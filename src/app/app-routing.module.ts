import { NgModule } from '@angular/core';
import { tick } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component'
// import { FactsComponent } from './home/facts/facts.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { HomeComponent } from './public/home/home.component';

import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import { TopbarComponent } from './core/layouts/topbar/topbar.component';
import { PublicComponent } from './public/public.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path:'dashboard',
component:PublicComponent,
children:[
  {
    path:'',
    loadChildren: () => import('./public/public.module').then(x=>x.PublicModule)
  }]},
  {
    path:'login',
component:LoginComponent,
children:[
  {
    path:'',
    loadChildren: () => import('./auth/auth.module').then(x=>x.AuthModule)
  }
]
},
{
  path:'h',
component:HomeComponent,
children:[
{
  path:'',
  loadChildren: () => import('./public/public.module').then(x=>x.PublicModule)
}
]
},

  
  {path:"topbar",component:TopbarComponent},
 {path:"login ",component:LoginComponent}


  
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
