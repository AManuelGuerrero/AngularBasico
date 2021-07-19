import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

 // @Output() onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter<Personaje>();

  @Input() public nuevo:Personaje={
    nombre:'',
    poder:0
  };

  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

  public agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
      }
    }

}
