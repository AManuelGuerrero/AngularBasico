import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  public heroes:string[]=['Spiderman','Ironman','Thor'];
  public heroeBorrado:string='';
  public verBorrado:boolean=false;
  
  constructor() { }

  borrarHeroe(){
   
    this.heroeBorrado=this.heroes.shift() || '';

  }

  

}
