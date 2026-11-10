import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  correo = '';
  contrasena = '';
  private auth = inject(Auth);
  private router = inject(Router);

  iniciarSesion() {
    this.auth.login(this.correo, this.contrasena).subscribe({
      next: (respuesta) => {
        this.auth.guardarToken(respuesta.token);
        this.router.navigate(['/ejercicios']);
      },
    });
  }
}
