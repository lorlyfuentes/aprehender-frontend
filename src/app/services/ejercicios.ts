import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth';

export interface Ejercicio {
  _id: string;
  titulo: string;
  nivel: string;
  consigna: string;
  opciones: string[];
  respuestaCorrecta: string;
  pista?: string;
  esMuestra: boolean;
}

@Service()
export class EjerciciosService {
  private http = inject(HttpClient);
  private auth = inject(Auth);
  private url = 'http://localhost:3000/api/ejercicios';

  private encabezados() {
    return { Authorization: `Bearer ${this.auth.obtenerToken()}` };
  }

  listar() {
    return this.http.get<{ ejercicios: Ejercicio[] }>(this.url, { headers: this.encabezados() });
  }

  obtener(id: string) {
    return this.http.get<{ ejercicio: Ejercicio }>(`${this.url}/${id}`, {
      headers: this.encabezados(),
    });
  }
}
