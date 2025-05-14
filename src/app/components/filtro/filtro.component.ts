import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-posicion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroPosicionComponent {
  @Input() posicion: string = '';
  @Output() posicionChange = new EventEmitter<string>();
}
