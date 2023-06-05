import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dispo } from 'src/app/model/dispo'; 
import { DispoServiceService } from 'src/app/services/dispo.service.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as swal from 'sweetalert';




@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile!: ElementRef;

  imagen!: File;
  imagenMin!: File;

  nombre:  String = '' ;
  descrip: String ='';
  precio!: number;
  url: string= '';
  disp: dispo | undefined;
   data: any;
  imagenc: any;
 url1!:any;
  
  constructor(
    private roouter : Router,
    private datosHard : DispoServiceService,
    private imagenService: ImagenService,
    private spinner: NgxSpinnerService,

     ) { }

  ngOnInit(): void {
    
    this.cargarImagen();
  }


  AgregarDispo (url:any):void{
    this.spinner.show;

    if( this.nombre !=null && this.descrip !=null && this.precio !=null && this.url!=null){
    const disp = new dispo(this.nombre,this.descrip,this.precio,this.url);
    this.datosHard.save(disp).subscribe( (data: any)=> {

     console.log(data);
     
    }
    )
  {

      swal("Producto agregado"); 
          
    
setTimeout(() => {
  this.spinner.hide;
  this.roouter.navigate(['principal']);
}, 3000); // 2000 milisegundos = 2 segundos de retraso
    }
  }
    else{
      swal("fallo al guardar producto");
      this.roouter.navigate(['principal'])
    }
   
   }
   onFileChange(event:any) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }
 

  reset(): void {
    this.imagen= null! ;
    this.imagenMin = null!;
    this.imagenFile.nativeElement.value = undefined;
  }
  cargarImagen(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.imagenService.list().subscribe(
        (data4: any) => {
          this.imagenc = data4;
          
          // Obtener el enlace de la última imagen
          if (this.imagenc && this.imagenc.length > 0) {
            const ultimaImagen = this.imagenc[this.imagenc.length - 1];
            this.url1 = ultimaImagen.imagen_url;
          }
          
          resolve(); // Resolver la promesa en caso de éxito
        },
        (error) => {
          console.log(error);
          reject(error); // Rechazar la promesa en caso de error
        }
      );
    });
  }
  
  onUpload(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show();
      this.imagenService.upload(this.imagen).subscribe(
        (data: any) => {
          this.spinner.hide();
          this.url = data.url; // Asignar la URL de la imagen
          resolve();
        },
        (err) => {
          swal(err.error.mensaje);
          this.spinner.hide();
          this.reset();
          reject(err);
        }
      );
    });
  }
  
  async ejecucion() {
    this.onUpload().then(() => {
      this.cargarImagen().then(() => {
        this.url = this.url1;
        this.AgregarDispo(this.url);
      }).catch((error: any) => {
        console.log(error);
        // Manejar el error de carga de imagen
      });
    }).catch(error => {
      console.log(error);
      // Manejar el error de subida de imagen
    });
  }
}