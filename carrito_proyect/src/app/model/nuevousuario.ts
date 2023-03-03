export class nuevousuario{
   
    nombreUsuario: string;
    email: string;
    password: string;
    authorities: string[];


    constructor( email: string, password: string, nombreUsuario: string, authorities:string[]){
        this.nombreUsuario=nombreUsuario;
        this.authorities=authorities;
        this.email=email;
        this.password=password;

}
}