import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ejercicio, EjerciciosService } from '../../services/ejercicios';
import { Auth } from '../../services/auth';

@Component({
  imports: [RouterLink],
  selector: 'app-ejercicios',
  styleUrl: './ejercicios.css',
  templateUrl: './ejercicios.html',
})
export class Ejercicios implements OnInit {
  ejercicios = signal<Ejercicio[]>([]);
  private ejerciciosService = inject(EjerciciosService);
  private auth = inject(Auth);
  esDocente = this.auth.obtenerRol() === 'docente';

  ngOnInit() {
    this.ejerciciosService.listar().subscribe({
      next: (respuesta) => {
        this.ejercicios.set(respuesta.ejercicios);
      },
    });
  }
}

