import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dispo } from '../model/dispo';
@Injectable({
  providedIn: 'root'
})
export class DispoServiceService {


  url = "https://carrito-gastyft.koyeb.app/dispo/";
  constructor( private http: HttpClient) { }

  public getDispoList():Observable<dispo>{
   return this.http.get<dispo>(`${this.url}getdispolist`);
  }
public update( id:number , Dispo:dispo): Observable<dispo>{
  return this.http.put<dispo>(`${this.url}editar/${id}?nombre=${Dispo.nombre}&descrip=${Dispo.descrip}&precio=${Dispo.precio}&url=${Dispo.url}`,dispo); 
}

public deleteDispo(id: number): Observable<any>{
  return this.http.delete<any>(this.url +`borrar/${id}`);
}
public getDispoId(id: number):Observable<dispo>{
  return this.http.get<dispo>(this.url + `traer/${id}`);
 }
 save(Dispo: dispo): Observable<any>{
  return this.http.post<any>(this.url + 'crear', Dispo);
 }
}