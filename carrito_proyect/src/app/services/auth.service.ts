

import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginUsuario } from '../model/loginiusuario';
import { nuevousuario } from '../model/nuevousuario';
import { jwtDto } from '../model/jwtdto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = "https://carrito-gastyft.koyeb.app/";

  constructor(private http: HttpClient, private router: Router) {}

  public nuevo(nuevoUsuario: nuevousuario): Observable<any> {
    return this.http.post<any>(this.url + 'auth/nuevo', nuevoUsuario);
  }

  public login(loginusuario: loginUsuario): Observable<jwtDto> {
    return this.http.post<jwtDto>(this.url+ 'auth/login', loginusuario);
  }
}

