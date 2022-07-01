import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../servicio-principal.service';

@Component({
  selector: 'app-componente-email',
  templateUrl: './componente-email.component.html',
  styleUrls: ['./componente-email.component.css']
})
export class ComponenteEmailComponent implements OnInit {

  emailRecibido:any={}

  constructor(private varServicio:ServicioPrincipalService) {

    varServicio.obtenerEmail().subscribe((data)=>{
      this.emailRecibido=data
    })
   }

   recargarEmail(){
    this.varServicio.obtenerEmail().subscribe((data)=>{
      this.emailRecibido=data
    })
   }

  ngOnInit(): void {
  }

}
