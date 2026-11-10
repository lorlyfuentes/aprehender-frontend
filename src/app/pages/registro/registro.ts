import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
  nombre = '';
  correo = '';
  contrasena = '';
  rol = 'familia';
  private auth = inject(Auth);
  private router = inject(Router);

  registrarse() {
    this.auth.registro(this.nombre, this.correo, this.contrasena, this.rol).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
    });
  }
}
