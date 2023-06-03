import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { dispo } from '../model/dispo';
import { DispoServiceService } from '../services/dispo.service.service';
import { CarritoService } from '../services/carrito.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Output() productosSeleccionadosCambiados: EventEmitter<number> = new EventEmitter<number>();

  data:any;
  dispos:any;
  id: any;
  productosEnCarrito: any[] = [];
 
 // dispos: dispo[]= [] ; 
  constructor(
    public datosDispo: DispoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carritoService: CarritoService,
  ) { 
    
  }

  ngOnInit(): void {
    this.cargarDatos();
    
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
   this.cargarDatos();
    
        
      })
      swal("Se ha eliminado producto","","error");

  
    location.reload();

}

}

agregarAlCarrito(disp:dispo) {
  this.carritoService.productosSeleccionados.push(disp);
  this.carritoService.productosSeleccionados1++;
  console.log('Producto agregado al carrito:', disp);
  
  this.productosSeleccionadosCambiados.emit(this.carritoService.productosSeleccionados1);
  swal("","Producto agregado al carrito","");

}
}
