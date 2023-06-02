import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { CardsNotebookComponent } from './cards-notebook/cards-notebook.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarComponent } from './agregar-prod/agregar/agregar.component';
import { EditarComponent } from './editar-prod/editar/editar.component';

const routes: Routes = [

  {path: '', 
  redirectTo: 'principal', pathMatch:'full'},
  {path: 'principal', 
  component:PrincipalComponent }, 
  {path: 'login',
  component: LoginComponent},
  {path:'cards',
component: CardsComponent},
{path:'notebookcard',
component: CardsNotebookComponent},  
{path: 'contacto',
component: ContactoComponent},
{path:'agregar',
component: AgregarComponent},
{path:'editar/:id',
component: EditarComponent},
{path: 'footer',
component: FooterComponent},




  { path: '**',  
component: Error404Component  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
