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
    
    
  getTextColor(url: string): string {
    const img = new Image();
    img.src = url;
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx === null) {
        return 'black'; // No se puede obtener el contexto, se devuelve un valor predeterminado
      }
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;

      let r = 0, g = 0, b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      r = Math.floor(r / (data.length / 4));
      g = Math.floor(g / (data.length / 4));
      b = Math.floor(b / (data.length / 4));

      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      const textColor = brightness > 125 ? 'black' : 'white';

      return textColor;
    };

    return 'black'; // Valor predeterminado en caso de que la imagen no se haya cargado correctamente
  }
  }