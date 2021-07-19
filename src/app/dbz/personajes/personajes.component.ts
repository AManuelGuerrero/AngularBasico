import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {

  //@Input() public personajes:Personaje[]=[];
  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

  get personajes(){
    return this.dbzService.personajes;
  }

}
