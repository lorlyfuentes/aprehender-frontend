import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEjercicio } from './detalle-ejercicio';

describe('DetalleEjercicio', () => {
  let component: DetalleEjercicio;
  let fixture: ComponentFixture<DetalleEjercicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEjercicio],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEjercicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
