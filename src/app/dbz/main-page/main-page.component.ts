import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {

  nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:1000
  }

  constructor() { }

  ngOnInit(): void {
  
  }



}
