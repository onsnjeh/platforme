import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisExpertComponent } from './avis-expert.component';

describe('AvisExpertComponent', () => {
  let component: AvisExpertComponent;
  let fixture: ComponentFixture<AvisExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
