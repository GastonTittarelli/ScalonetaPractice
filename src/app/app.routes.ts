import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { JugadoresViewsComponent } from './views/jugadores-views/jugadores-views.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent }, 
  { path: 'jugadores', component: JugadoresViewsComponent }, 
  {path: '**', redirectTo: ''} 
];
