import { NgModule } from '@angular/core';
import { tick } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component'
// import { FactsComponent } from './home/facts/facts.component';
import { HomeComponent } from './public/home/home.component';






const routes: Routes = [
  {path:"",component:HomeComponent},
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
 path:"h",component:HomeComponent,
children:[
{
  path:'',
  loadChildren: () => import('./public/public.module').then(x=>x.PublicModule)
}
]
},




  
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
