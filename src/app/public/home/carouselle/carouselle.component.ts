import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselle',
  templateUrl: './carouselle.component.html',
  styleUrls: ['./carouselle.component.css']
})
export class CarouselleComponent {
  images = [
    'assets/img/carousel-1.jpg',
    'assets/img/carousel-3.jpg',
    'assets/img/carousel-2.jpg'
  ];
}
