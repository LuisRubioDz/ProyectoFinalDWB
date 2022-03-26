import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosFormatoComponent } from './estilos-formato.component';

describe('EstilosFormatoComponent', () => {
  let component: EstilosFormatoComponent;
  let fixture: ComponentFixture<EstilosFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosFormatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
