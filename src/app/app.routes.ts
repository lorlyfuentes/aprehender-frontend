import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Ejercicios } from './pages/ejercicios/ejercicios';
import { DetalleEjercicio } from './pages/detalle-ejercicio/detalle-ejercicio';
import { FormularioEjercicio } from './pages/formulario-ejercicio/formulario-ejercicio';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'ejercicios', component: Ejercicios },
  { path: 'ejercicios/nuevo', component: FormularioEjercicio },
  { path: 'ejercicios/:id/editar', component: FormularioEjercicio },
  { path: 'ejercicios/:id', component: DetalleEjercicio }
];
