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
      
    }) } }