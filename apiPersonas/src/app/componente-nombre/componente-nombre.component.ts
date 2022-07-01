import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-nombre',
  templateUrl: './componente-nombre.component.html',
  styleUrls: ['./componente-nombre.component.css']
})
export class ComponenteNombreComponent implements OnInit {

  @Input() nombre:string=''
  
  constructor() { }

  ngOnInit(): void {
  }

}
