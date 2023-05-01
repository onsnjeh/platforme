import {  Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CartesAffichantCategoriesComponent } from './home/carte-affichant-categories/carte-affichant-categories.component';

// import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { RechercheComponent } from './recherche/recherche.component'
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';




export const PublicRoutingModule: Routes = [
    // {path:"",component:HomeComponent},
    {path:"service",component:ServiceComponent},
    {path:'categorie',component:CartesAffichantCategoriesComponent},
    {path:"categorie/:nom",component:CategoriesComponent},
    {path:"recherche",component:RechercheComponent},
    {path:"aboutUs",component:AboutComponent},
    // {path:"**",component:ErrorComponent},
    {path:"contactus" ,component:ContactUsComponent}
  ]
  
