import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productosEnCarrito: any[] = [];
  cantidad: number=0;
  cantidad1: number=0;
  constructor( private carritoService: CarritoService,) {  this.cantidad= carritoService.productosSeleccionados1;}

  ngOnInit(): void {

  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  }
}
