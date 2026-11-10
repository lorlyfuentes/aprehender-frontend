import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Auth {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/usuarios';

  login(correo: string, contrasena: string) {
    return this.http.post<{ mensaje: string; token: string }>(`${this.url}/login`, {
      correo,
      contrasena,
    });
  }

  registro(nombre: string, correo: string, contrasena: string, rol: string) {
    return this.http.post<{ mensaje: string }>(`${this.url}/registro`, {
      nombre,
      correo,
      contrasena,
      rol,
    });
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken() {
    return localStorage.getItem('token');
  }

  obtenerRol() {
    const token = this.obtenerToken();
    if (!token) {
      return null;
    }
    const datos = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(datos)).rol;
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }
}
