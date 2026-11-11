import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EjerciciosService } from '../../services/ejercicios';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-formulario-ejercicio',
  styleUrl: './formulario-ejercicio.css',
  templateUrl: './formulario-ejercicio.html',
})
export class FormularioEjercicio implements OnInit {
  titulo = '';
  nivel = 'Exploradores';
  consigna = '';
  opciones = '';
  respuestaCorrecta = '';
  pista = '';
  esMuestra = false;
  editando = signal(false);
  error = signal('');
  private id: string | null = null;
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);
  private ejerciciosService = inject(EjerciciosService);

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this.ejerciciosService.obtener(this.id).subscribe({
        next: (respuesta) => {
          const ejercicio = respuesta.ejercicio;
          this.titulo = ejercicio.titulo;
          this.nivel = ejercicio.nivel;
          this.consigna = ejercicio.consigna;
          this.opciones = ejercicio.opciones.join(', ');
          this.respuestaCorrecta = ejercicio.respuestaCorrecta;
          this.pista = ejercicio.pista ?? '';
          this.esMuestra = ejercicio.esMuestra;
          this.editando.set(true);
        },
      });
    }
  }

  guardar() {
    const datos = {
      titulo: this.titulo,
      nivel: this.nivel,
      consigna: this.consigna,
      opciones: this.opciones
        .split(',')
        .map((opcion) => opcion.trim())
        .filter((opcion) => opcion !== ''),
      respuestaCorrecta: this.respuestaCorrecta.trim(),
      pista: this.pista,
      esMuestra: this.esMuestra,
    };

    const peticion = this.id
      ? this.ejerciciosService.actualizar(this.id, datos)
      : this.ejerciciosService.crear(datos);

    peticion.subscribe({
      next: () => {
        this.router.navigate(['/ejercicios']);
      },
      error: (respuesta) => {
        this.error.set(
          respuesta.error?.errores?.[0]?.msg ??
            respuesta.error?.mensaje ??
            'No se pudo guardar el ejercicio.',
        );
      },
    });
  }
}
