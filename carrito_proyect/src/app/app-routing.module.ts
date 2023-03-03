import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  {path: '', 
  redirectTo: 'principal', pathMatch:'full'},
  {path: 'principal', 
  component:PrincipalComponent }, 
  {path: 'login',
  component: LoginComponent},
  






  { path: '**',  
component: Error404Component  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
