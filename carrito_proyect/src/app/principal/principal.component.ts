import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     const isWelcomeShown = localStorage.getItem('isWelcomeShown');
    
 
      swal("Bienvenido a mi E-commerce", "Soy Desarrollador Full-Stack Jr y Tester Manual Trainee en busca de mi primer trabajo IT con ganas de trabajar y seguir aprendiendo en el mundo de la programación", "")
      .then(() => {
    //    swal("Bienvenido a mi E-commerce", "Página en Mantenimiento", "warning");
      });
  
  //   localStorage.setItem('isWelcomeShown', 'true');
    
    
  }
  

  }


