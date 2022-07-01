import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../servicio-principal.service';

@Component({
  selector: 'app-componente-pasaporte',
  templateUrl: './componente-pasaporte.component.html',
  styleUrls: ['./componente-pasaporte.component.css']
  
})
export class ComponentePasaporteComponent implements OnInit {

  recibirPassport:any={}

  constructor(private varServicio:ServicioPrincipalService) {

    varServicio.obtenerPasaporte().subscribe((data)=>{
      this.recibirPassport=data
    })
   }

  recargarPasaporte(){
    this.varServicio.obtenerPasaporte().subscribe((data)=>{
    this.recibirPassport=data
  })
}

  
  ngOnInit(): void {
  }

}
