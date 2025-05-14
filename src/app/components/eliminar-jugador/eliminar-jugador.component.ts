import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-eliminar-jugador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar-jugador.component.html',
  styleUrl: './eliminar-jugador.component.css'
})
export class EliminarJugadorComponent {
  @Input() jugadores: Jugador[] = [];
  @Output() jugadoresActualizados = new EventEmitter<Jugador[]>();

  eliminarJugadorMayor(): void {
  if (this.jugadores.length === 0) return;

  const edadMaxima = Math.max(...this.jugadores.map(j => j.edad));
  const indice = this.jugadores.findIndex(j => j.edad === edadMaxima);

  if (indice !== -1) {
    this.jugadores.splice(indice, 1);
    localStorage.setItem('jugadores', JSON.stringify(this.jugadores));
  }
}
}
