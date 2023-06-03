import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { nuevousuario } from '../model/nuevousuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario!: nuevousuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;

  errMsj!: string;
  isLogged = false;
  password: any;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    
    const password = this.password;
    this.nuevoUsuario = new nuevousuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        if(data){
       swal("Registro exitoso","","success");
       this.router.navigate(['/principal']);
        }
        else {
          swal("Error al registrarse","Intente de nuevo","error");
        }
        });
      

        
    
      }
    
        }
        
      
  
  



 