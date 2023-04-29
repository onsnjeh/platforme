import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteAffichantCategoriesComponent } from './carte-affichant-categories.component';

describe('CarteAffichantCategoriesComponent', () => {
  let component: CarteAffichantCategoriesComponent;
  let fixture: ComponentFixture<CarteAffichantCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteAffichantCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteAffichantCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
