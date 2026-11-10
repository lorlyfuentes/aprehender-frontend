import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Ejercicio, EjerciciosService } from '../../services/ejercicios';

@Component({
  imports: [RouterLink],
  selector: 'app-detalle-ejercicio',
  styleUrl: './detalle-ejercicio.css',
  templateUrl: './detalle-ejercicio.html',
})
export class DetalleEjercicio implements OnInit {
  ejercicio = signal<Ejercicio | null>(null);
  private ruta = inject(ActivatedRoute);
  private ejerciciosService = inject(EjerciciosService);

  ngOnInit() {
    const id = this.ruta.snapshot.paramMap.get('id');
    if (id) {
      this.ejerciciosService.obtener(id).subscribe({
        next: (respuesta) => {
          this.ejercicio.set(respuesta.ejercicio);
        },
      });
    }
  }
}
