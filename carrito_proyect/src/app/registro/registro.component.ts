import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { nuevousuario } from '../model/nuevousuario';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevousuario: nuevousuario |undefined;

  nombre!:any;
  nombreUsuario!:any;
  email!: any;
  password!: any;
  errMsj!: any;
  isLogged = false;
  rol:any='ROLE_USER';

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
    this.nuevousuario = new nuevousuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo( this.nuevousuario ).subscribe(
      () => {
        
        swal("", "Cuenta creada", "success");
        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        swal("", "Error al registrarse " + this.errMsj, "error");
      }
    );
  }

        }
        
      
  
  



 