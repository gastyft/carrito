import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { dispo } from '../model/dispo';
import { DispoServiceService } from '../services/dispo.service.service';
import { CarritoService } from '../services/carrito.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as swal from 'sweetalert';
import { TokenService } from '../services/token.service'; 
import { ImagenService } from '../services/imagen.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Output() productosSeleccionadosCambiados: EventEmitter<number> = new EventEmitter<number>();
  isLogged : boolean= false;
  data:any;
  dispos:any;
  roles:string[]=[];
  productosEnCarrito: any[] = [];
  esAdmin: boolean=true;
  mostrarBoton: boolean =true;
  imagenc:any;
 
 // dispos: dispo[]= [] ; 
  constructor(
    public datosDispo: DispoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carritoService: CarritoService,
    public tokenService: TokenService,
    private imagenService: ImagenService,
  ) { 
    
  }

  ngOnInit(): void {
    this.cargarDatos();
    if (this.tokenService.getToken()) {
      this.roles = this.tokenService.getAuthorities();
      this.isLogged = true;
      this.esAdmin = this.roles.includes('ROLE_ADMIN');
    } else {

      this.isLogged = false;
    }
    const currentRoute = this.router.url;

    if (currentRoute === '/principal') {
      this.mostrarBoton = false;
    } else {
      this.mostrarBoton = true;
    }
  }

  cargarDatos(){
    this.datosDispo.getDispoList().subscribe( data =>{
      console.log(data)
      this.dispos = data;
      
    }) } 

    
deleteDispo(id?: number){
  if(id != null){
    this.datosDispo.deleteDispo(id).subscribe(
              data => {
   
                swal("Se ha eliminado producto","","error");
      })
      setTimeout(() => {
          
      location.reload();
      }, 2000); // 2000 milisegundos = 2 segundos de retraso
    

}

}

agregarAlCarrito(disp:dispo) {
  this.carritoService.productosSeleccionados.push(disp);
  this.carritoService.productosSeleccionados1++;
  console.log('Producto agregado al carrito:', disp);
  
  this.productosSeleccionadosCambiados.emit(this.carritoService.productosSeleccionados1);
  swal("","Producto agregado al carrito","");

}
cargarImagen(){
   

  this.imagenService.list().subscribe(
    data4=>{
     
 
      this.imagenc = data4; 
      
    
})
}
formatNumber(value: number): string {
  return value.toLocaleString('es', { minimumFractionDigits: 2 });
}
}

