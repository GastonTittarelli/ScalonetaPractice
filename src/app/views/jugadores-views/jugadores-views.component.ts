import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../../models/jugador.model';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-jugadores-views',
  imports: [SharedModule],
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
}

// Ver Injectable