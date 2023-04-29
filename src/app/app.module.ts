import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import { TopbarComponent } from './core/layouts/topbar/topbar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { PublicModule } from './public/public.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
      TopbarComponent,
   
          TopbarComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    
    AuthModule,
    NgbCollapseModule,NgbAccordionModule,NgbCarouselModule,
    PanelMenuModule, PublicModule,
    NgbDropdownModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
