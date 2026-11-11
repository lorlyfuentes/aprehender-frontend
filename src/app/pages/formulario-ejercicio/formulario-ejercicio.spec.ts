import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioEjercicio } from './formulario-ejercicio';

describe('FormularioEjercicio', () => {
  let component: FormularioEjercicio;
  let fixture: ComponentFixture<FormularioEjercicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEjercicio],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioEjercicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
