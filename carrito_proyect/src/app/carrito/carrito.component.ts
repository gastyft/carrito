import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Router } from '@angular/router';

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
  constructor(private carritoService: CarritoService,
    private router: Router,
    ) {  this.productosEnCarrito = carritoService.productosSeleccionados; 
  
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
  formatNumber(value: number): string {
    return value.toLocaleString('es', { minimumFractionDigits: 2 });
  }

  comprar(){
swal("Compra exitosa"," Adquirio estos productos por $"+ this.formatNumber(this.total),"success");
while (this.productosEnCarrito.length > 0) {
  const producto = this.productosEnCarrito[0];
  this.eliminarProductoDelCarrito(producto);
}
this.router.navigate(['principal']);
  }
}

