import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselleComponent } from './carouselle.component';

describe('CarouselleComponent', () => {
  let component: CarouselleComponent;
  let fixture: ComponentFixture<CarouselleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
