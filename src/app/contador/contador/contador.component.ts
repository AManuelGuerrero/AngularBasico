import { Component } from '@angular/core'


@Component({
    selector:'app-contador',
    template:`
    
    <h1>{{title}}</h1>
    <h3>La base es: <strong>5</strong></h3>

    <button (click)="this.acomular(-base)">- {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="this.acomular(base)">+ {{base}}</button>
    
    
    `
})
export class ContadorComponent{
  
  public title:string = 'Cotador App';
  public numero:number=10;
  public base:number =5;

  constructor(){

  }

  public acomular(valor:number){
    this.numero+=valor;
  }
}