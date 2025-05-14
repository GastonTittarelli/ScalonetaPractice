import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda-jugador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaJugadorComponent {
  @Input() busqueda: string = '';
  @Output() busquedaChange = new EventEmitter<string>();
}
