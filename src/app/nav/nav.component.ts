import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
