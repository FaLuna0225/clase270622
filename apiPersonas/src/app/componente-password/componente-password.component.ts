import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../servicio-principal.service';

@Component({
  selector: 'app-componente-password',
  templateUrl: './componente-password.component.html',
  styleUrls: ['./componente-password.component.css']
})
export class ComponentePasswordComponent implements OnInit {

  PasswordRecibido:any={}

  constructor(private varServicio:ServicioPrincipalService) { 
    varServicio.obtenerUserName().subscribe((data)=>{
     this.PasswordRecibido=data
    })
  }

  recargarPassword(){
      this.varServicio.obtenerUserName().subscribe((data)=>{
      this.PasswordRecibido=data
     })
  }

  ngOnInit(): void {
  }

}
