import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteAvisComponent } from './carte-avis.component';

describe('CarteAvisComponent', () => {
  let component: CarteAvisComponent;
  let fixture: ComponentFixture<CarteAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
