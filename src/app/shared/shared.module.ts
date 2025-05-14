import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstadisticasComponent } from '../components/estadisticas/estadisticas.component';
import { FiltroPosicionComponent } from '../components/filtro/filtro.component';
import { BusquedaJugadorComponent } from '../components/busqueda/busqueda.component';
import { EliminarJugadorComponent } from '../components/eliminar-jugador/eliminar-jugador.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    EstadisticasComponent,
    FiltroPosicionComponent,
    BusquedaJugadorComponent,
    EliminarJugadorComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    EstadisticasComponent,
    FiltroPosicionComponent,
    BusquedaJugadorComponent,
    EliminarJugadorComponent,
  ]
})
export class SharedModule {}
