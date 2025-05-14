import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css',
})
export class EstadisticasComponent {
  @Input() jugadores: Jugador[] = [];

  calcularEdadPromedio(): number {
    const total = this.jugadores.reduce((sum, jugador) => sum + jugador.edad, 0);
    return this.jugadores.length ? Math.round(total / this.jugadores.length) : 0;
  }}
