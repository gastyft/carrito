
import { Component, OnInit } from '@angular/core';
import { dispo } from 'src/app/model/dispo';
import { DispoServiceService } from 'src/app/services/dispo.service.service';

import * as swal from 'sweetalert';

import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  dispositivos: any;
 
nombre: dispo | undefined ;
descrip : dispo | undefined ;
precio: dispo | undefined ;
url: dispo | undefined;
  data: any;
  
    constructor( 
      private router: Router,
     private datosDispo: DispoServiceService,
     private acivatedroute: ActivatedRoute,
    ) { 
      
  
    }  
  
    ngOnInit() {
  
      {
        const id = this.acivatedroute.snapshot.params['id'];
        this.datosDispo.getDispoId(id).subscribe(
          (          data: any) => { 
            console.log(data);
            this.dispositivos=data;
            
            this.nombre= this.dispositivos.nombre;
            this.descrip =this.dispositivos.descrip;
            this.precio =this.dispositivos.precio;
            this.url = this.dispositivos.url;
          }  );
         
      }  
  
  
  }
  
  
     onUpdate():void{
      const id = this.acivatedroute.snapshot.params['id'];
      this.datosDispo.update(id, this.dispositivos).subscribe(
        (        data: any) =>{
         console.log(data);
       
          
        });
        if(this.dispositivos != null){
          swal("Dispositivo Editado"); 
              
          this.router.navigate(['principal']);
        }
        else{
          swal("Fallo al guardar dispositivo");
          this.router.navigate(['principal']);
        }
     }
      
   
    }