import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstadisticasComponent } from '../../components/estadisticas/estadisticas.component';

export interface Jugador {
  nombre: string;
  apellido: string;
  edad: number;
  posicion: 'ARQ' | 'DEF' | 'MED' | 'DEL';
}

@Component({
  selector: 'app-jugadores-views',
  imports: [CommonModule, FormsModule, EstadisticasComponent ],
  templateUrl: './jugadores-views.component.html',
  styleUrl: './jugadores-views.component.css'
})
export class JugadoresViewsComponent {
  
jugadores: Jugador[] = [];

posicionSeleccionada: string = '';
busquedaNombre: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  const datosGuardados = localStorage.getItem('jugadores');
  if (datosGuardados) {
    this.jugadores = JSON.parse(datosGuardados);
  } else {
    this.http.get<Jugador[]>('/jugadores.json').subscribe((data) => {
      this.jugadores = data;
      localStorage.setItem('jugadores', JSON.stringify(data));
    });
  }
}

  get jugadoresFiltrados(): Jugador[] {
    return this.jugadores.filter(jugador => {
      const coincidePosicion =
        !this.posicionSeleccionada || jugador.posicion === this.posicionSeleccionada;

      const coincideNombre =
        !this.busquedaNombre ||
        jugador.nombre.toLowerCase().includes(this.busquedaNombre.toLowerCase());

      return coincidePosicion && coincideNombre;
    });
  }

  eliminarJugadorMayor(): void {
  if (this.jugadores.length === 0) return;

  const edadMaxima = Math.max(...this.jugadores.map(j => j.edad));
  const indice = this.jugadores.findIndex(j => j.edad === edadMaxima);

  if (indice !== -1) {
    this.jugadores.splice(indice, 1);
    localStorage.setItem('jugadores', JSON.stringify(this.jugadores));
  }
}

// get edadPromedio(): number {
//   if (this.jugadores.length === 0) return 0;

//   const sumaEdades = this.jugadores.reduce((total, jugador) => total + jugador.edad, 0);
//   return Math.round(sumaEdades / this.jugadores.length);
// }

}
