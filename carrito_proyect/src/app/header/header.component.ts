import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { TokenService } from '../services/token.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productosEnCarrito: any[] = [];
  cantidad: number=0;
  cantidad1: number=0;
  isLogged : boolean= false;
  roles: string[]=[];
  esAdmin:boolean=true;
  constructor( private carritoService: CarritoService,public tokenService: TokenService,) {  this.cantidad= carritoService.productosSeleccionados1;}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.roles = this.tokenService.getAuthorities();
      this.isLogged = true;
      this.esAdmin = this.roles.includes('ROLE_ADMIN');
    } else {
      
      this.isLogged = false;
    }
  
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
   
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
}
 
  }

