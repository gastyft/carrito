import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { loginUsuario } from '../model/loginiusuario';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  nombreUsuario!: string;
  password!: string;

  isLogged= false;
  isLoginFail = false;
  loginUsuario: loginUsuario | undefined;
  roles:string[]=[];
  errMsj:string | undefined;
  

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

  onLogin():void {
    this.loginUsuario= new loginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
  this.isLogged= true;
  this.isLoginFail=false;
  this.tokenService.setToken(data.token);
  this.tokenService.setUserName(data.nombreUsuario);
  this.tokenService.setAuthorities(data.authorities);
  this.roles=data.authorities;
  this.router.navigate(['']);
 },
   err =>{
  this.isLogged= false;
  this.isLoginFail= true;
  this.errMsj = " Usuario o contraseña mal colocada. Intente de nuevo.";
  console.log(this.errMsj);
   }
)}
  
}
