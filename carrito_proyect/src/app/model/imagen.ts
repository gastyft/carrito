export class Imagen {
    id_imagen?:number;
    name: string;
    imagen_url: string;
    imagen_id: string;

constructor(
    name: string,
    imagen_url: string,
    imagen_id: string ) 
    {
        this.name=  name;
        this.imagen_url= imagen_url;
        this.imagen_id= imagen_id;
      
    }
}


  