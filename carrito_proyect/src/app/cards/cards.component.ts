import { Component, OnInit } from '@angular/core';
import { dispo } from '../model/dispo';
import { DispoServiceService } from '../services/dispo.service.service';

import { ActivatedRoute, Router } from '@angular/router';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data:any;
  dispos:any;
  id: any;
 
 // dispos: dispo[]= [] ; 
  constructor(
    public datosDispo: DispoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.cargarDatos();
    
  }
  cargarDatos(){
    this.datosDispo.getDispoList().subscribe( data =>{
      if(data){
      console.log(data)
      this.dispos = data;
      }
      else{
        swal("Bienvenido a mi portfolio", "Soy Desarrollador Full-Stack Jr y Tester Manual Trainee en busca de mi primer trabajo IT con ganas de trabajar y seguir aprendiendo en el mundo de la programación", "")
        .then(() => {
          swal("Problemas con el servidor", "Página en mantenimiento. No se cargarán mis datos. Disculpen las molestias", "error");
      });
    } });
      }
    

    
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
}