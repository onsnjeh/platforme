import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CategorieService} from 'src/app/core/services/categorie/categorie.service';
import {Categorie} from 'src/app/core/models/categorie.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit{

  data:Categorie[] =[];

  constructor(private dataCategorie: CategorieService, private router: Router) { }
  
  ngOnInit() {
    this.dataCategorie.getLimitCategorie()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
  goToCart(name: string): void {
    // this.nameColor = 'red';
    this.router.navigate([`/cat/${name}`]);
    // this.carteSelectionneeNom = this.carts.name;
   //,{ queryParams: { name: this.carts.name } }
  }
//   card!:Categorie;
//   // color:string=''
//   constructor(private service:CategorieService, private router:ActivatedRoute){

//   }
// getCardByName(nom:string):void{
// this.service.getCategoryByName(nom).subscribe(data=>{
// // this.card=data[0];
// })
// }
// ngOnInit():void{
//   const nom=this.router.snapshot.paramMap.get('nom')
//   if (nom!=null) {
//     this.getCardByName(nom);
//   // this.color=this.card
// }

// }
}
