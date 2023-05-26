import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbPaginationModule, NgbTypeaheadModule, NgbCollapseModule, NgbAccordionModule, NgbCarouselModule, NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import {  CarouselModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./core/layouts/footer/footer.component";
import { TopbarComponent } from "./core/layouts/topbar/topbar.component";
import { PublicModule } from "./public/public.module";
import { NavbarComponent } from "./core/layouts/navbar/navbar.component";
import { AuthModule } from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
      TopbarComponent,
      NavbarComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,NgbAccordionModule,NgbCarouselModule,
    PublicModule,
    NgbDropdownModule,
    CarouselModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
