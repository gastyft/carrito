import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productosSeleccionados: any[] = [];
  productosSeleccionados1: number = 0;
  private productosSeleccionadosSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  productosSeleccionados$ = this.productosSeleccionadosSubject.asObservable();

  constructor() { }
  

  obtenerProductosSeleccionados(): number {
    return this.productosSeleccionados1;
  }
  actualizarProductosSeleccionados(cantidad: number) {
    this.productosSeleccionadosSubject.next(cantidad);
  }
}
