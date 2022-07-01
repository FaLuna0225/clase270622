import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ServicioPrincipalService } from '../servicio-principal.service';

@Component({
  selector: 'app-componente-usarname',
  templateUrl: './componente-usarname.component.html',
  styleUrls: ['./componente-usarname.component.css']
})
export class ComponenteUsarnameComponent implements OnInit {
  
  UsarnameRecibido:any={}

  constructor(private varServicio:ServicioPrincipalService) { 
    varServicio.obtenerUserName().subscribe((data)=>{
     this.UsarnameRecibido=data
    })
  }

  recargarUsername(){
      this.varServicio.obtenerUserName().subscribe((data)=>{
      this.UsarnameRecibido=data
     })
  }

  ngOnInit(): void {
  }

}
