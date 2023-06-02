import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CardsComponent } from './cards/cards.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CardsNotebookComponent } from './cards-notebook/cards-notebook.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import {CloudinaryModule} from '@cloudinary/ng';
import { FooterComponent } from './footer/footer.component';
import { AgregarComponent } from './agregar-prod/agregar/agregar.component';
import { EditarComponent } from './editar-prod/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    OfertasComponent,
    CardsComponent,
    ContactoComponent,
    CardsNotebookComponent,
    Error404Component,
    LoginComponent,
    FooterComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule,
  ],
  providers: [ 
    InterceptorService, 
  
  
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
