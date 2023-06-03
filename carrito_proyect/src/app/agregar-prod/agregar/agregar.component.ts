import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dispo } from 'src/app/model/dispo'; 
import { DispoServiceService } from 'src/app/services/dispo.service.service';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nombre:  String = '' ;
  descrip: String ='';
  precio!: number;
  url: string= '';
  disp: dispo | undefined;
   data: any;
 
  
  constructor(
    private roouter : Router,
    private datosHard : DispoServiceService) { }

  ngOnInit(): void {
    
  }


  AgregarDispo ():void{
    if( this.nombre !=null && this.descrip !=null && this.precio !=null && this.url!=null){
    const disp = new dispo(this.nombre,this.descrip,this.precio,this.url);
    this.datosHard.save(disp).subscribe( (data: any)=> {
     console.log(data);
    }
    )
  {

      swal("Producto agregado"); 
          
      this.roouter.navigate(['principal']);
    }
  }
    else{
      swal("fallo al guardar producto");
      this.roouter.navigate(['principal'])
    }
   
   }
  
}