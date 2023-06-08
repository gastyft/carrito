import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { loginUsuario } from '../model/loginiusuario';
import { TokenService } from '../services/token.service';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  nombreUsuario: any;
  password: any;

  isLogged= false;
  isLoginFail = false;
  loginUsuario: loginUsuario | undefined;
  roles:string[]=[];
  errMsj:string | undefined;
;
  

constructor(private authService: AuthService,   private router:Router,

  private tokenService:TokenService ) { 
  }




  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  onLogin(): void {
    this.loginUsuario = new loginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
     swal('Bienvenido ' + data.nombreUsuario,"","success");
        this.router.navigate(['/principal']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        if(this.errMsj == "undefined"){
          this.errMsj= "Usuario no existe"
        swal(""+this.errMsj,"","error");
        }
        else{
          swal(""+this.errMsj,"","error");
        }
        // console.log(err.error.message);
      }
    );
  }
}
