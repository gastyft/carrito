
import { Component, OnInit } from '@angular/core';
import { dispo } from 'src/app/model/dispo';
import { DispoServiceService } from 'src/app/services/dispo.service.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as swal from 'sweetalert';

import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile!: ElementRef;

  imagen!: File;
  imagenMin!: File;
  imagenActual!:File;
  dispositivos: any;
 
nombre: dispo | undefined ;
descrip : dispo | undefined ;
precio: dispo | undefined ;
url: dispo | undefined;
  data: any;
  imagenc:any;
  url1: any;
    constructor( 
      private router: Router,
     private datosDispo: DispoServiceService,
     private acivatedroute: ActivatedRoute,
     private imagenService: ImagenService,
     private spinner: NgxSpinnerService,
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
  
  async onUpdate() {
    const id = this.acivatedroute.snapshot.params['id'];
  
    // Verificar si se ha cargado una nueva imagen
    if (this.imagen) {
      try {
        await this.onUpload();
        await this.cargarImagen();
        // Asignar el URL de la imagen al dispositivo
        this.dispositivos.url = this.url1;
  
        // Actualizar los demás datos del dispositivo
        this.datosDispo.update(id, this.dispositivos).subscribe(
          (data: any) => {
            console.log(data);
            swal("Dispositivo Editado");
            this.router.navigate(['principal']);
          },
          (error: any) => {
            console.log(error);
            // Manejar el error de actualización del dispositivo
          }
        );
      } catch (error) {
        console.log(error);
        // Manejar errores
      }
    } else {
      // Si no se cargó una nueva imagen, actualizar solo los demás datos del dispositivo
      this.datosDispo.update(id, this.dispositivos).subscribe(
        (data: any) => {
          console.log(data);
          swal("Dispositivo Editado");
          this.router.navigate(['principal']);
        },
        (error: any) => {
          console.log(error);
          // Manejar el error de actualización del dispositivo
        }
      );
    }
  }
  
     
      
   
     onFileChange(event: any) {
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

  }