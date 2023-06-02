export class dispo {
    id?: number;
    nombre: String;
    descrip: String;
 
    precio:number;
    
 
   url: String;

constructor(  
   nombre: String,
   descrip: String,
   precio: number,
   url: String,
   ){

   this. nombre=  nombre;
   this. descrip=  descrip;
   this.precio=precio;
   this.url=url;

   }
   }