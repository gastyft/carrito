import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: any[] = [];
  data:any;
  dispos:any;
  producto: any
  datosDispo: any;
  total: number = 0;
  constructor(private carritoService: CarritoService) {  this.productosEnCarrito = carritoService.productosSeleccionados; 
  
    this.calcularTotal();}

  ngOnInit(): void {
    
 
  }
  
  calcularTotal() {
    this.total = this.productosEnCarrito.reduce((accumulator, producto) => accumulator + producto.precio, 0);
  }

  eliminarProductoDelCarrito(producto: any) {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index !== -1) {
      this.productosEnCarrito.splice(index, 1);
      this.calcularTotal();
      this.carritoService.productosSeleccionados1--;
      console.log('Producto eliminado del carrito:', producto);
    }
  }
}

