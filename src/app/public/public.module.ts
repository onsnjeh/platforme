import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { AboutComponent } from "./about/about.component";
import { CategoriesComponent } from "./categories/categories.component";
import { MenuCategoriesComponent } from "./categories/menu-categories/menu-categories.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ErrorComponent } from "./error/error.component";
import { AboutUsComponent } from "./home/about-us/about-us.component";
import { AvisExpertComponent } from "./home/avis-expert/avis-expert.component";
import { CarouselleComponent } from "./home/carouselle/carouselle.component";
import { CartesAffichantCategoriesComponent } from "./home/carte-affichant-categories/carte-affichant-categories.component";
import { CarteArticleComponent } from "./home/carte-article/carte-article.component";
import { CarteAvisComponent } from "./home/carte-avis/carte-avis.component";
import { HomeComponent } from "./home/home.component";
import { ListeArticlesComponent } from "./home/liste-articles/liste-articles.component";
import { NewsLetterComponent } from "./home/news-letter/news-letter.component";
import { PartenairesComponent } from "./home/partenaires/partenaires.component";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { PublicRoutingModule } from "./public.routing";
import { RechercheComponent } from "./recherche/recherche.component";
import { OffreComponent } from "./service/offre/offre.component";
import { ServiceComponent } from "./service/service.component";


@NgModule({
  declarations: [
    
    HomeComponent,
    AboutUsComponent,
    AvisExpertComponent,
    CarouselleComponent,
    CarteAvisComponent,
    CarteArticleComponent,
    ListeArticlesComponent,
    NewsLetterComponent,
    PartenairesComponent,
    CartesAffichantCategoriesComponent,
    ServiceComponent,
    OffreComponent,
    CategoriesComponent,
    ListArticlesComponent,
    MenuCategoriesComponent,
    RechercheComponent,
    AboutComponent,
    ErrorComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,BrowserModule,ReactiveFormsModule,
    NgbModule, NgbCarouselModule, FormsModule, NgxPaginationModule,
    RouterModule.forChild(PublicRoutingModule)
  ]
})
export class PublicModule { }
