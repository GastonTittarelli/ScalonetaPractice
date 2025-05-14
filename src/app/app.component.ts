import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Scaloneta';
}
