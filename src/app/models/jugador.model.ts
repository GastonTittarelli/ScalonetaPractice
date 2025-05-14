export interface Jugador {
  nombre: string;
  apellido: string;
  edad: number;
  posicion: 'ARQ' | 'DEF' | 'MED' | 'DEL';
}