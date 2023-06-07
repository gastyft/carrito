import { Component, OnInit } from '@angular/core';
import { dispo } from '../model/dispo';
import { DispoServiceService } from '../services/dispo.service.service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

 
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
      console.log(data)
      this.dispos = data;
      
    }) } 
    obtenerOrdenAleatorio(): any[] {
      return this.dispos.slice().sort(() => Math.random() - 0.5);
    }
    formatNumber(value: number): string {
      return value.toLocaleString('es', { minimumFractionDigits: 2 });
    }

  }