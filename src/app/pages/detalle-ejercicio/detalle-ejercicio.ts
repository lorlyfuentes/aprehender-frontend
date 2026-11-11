import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ejercicio, EjerciciosService } from '../../services/ejercicios';
import { Auth } from '../../services/auth';

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
  private auth = inject(Auth);
  private router = inject(Router);
  esDocente = this.auth.obtenerRol() === 'docente';
  elegida = signal('');
  mensaje = signal('Lee con calma y elige tu respuesta.');

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

  eliminar(id: string) {
    if (!confirm('¿Eliminar este ejercicio? Esta acción no se puede deshacer.')) {
      return;
    }
    this.ejerciciosService.eliminar(id).subscribe({
      next: () => {
        this.router.navigate(['/ejercicios']);
      },
    });
  }

  elegir(opcion: string, correcta: string) {
    this.elegida.set(opcion);
    this.mensaje.set(opcion === correcta ? '¡Muy bien!' : 'Casi... ¡vuelve a intentarlo!');
  }
}
