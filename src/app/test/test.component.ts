import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:`
  <h2> welcome {{title}}</h2>
  <button (click)="onClick($event)" >Greet</button>
  <button (click)="greeting='Welcome Praveen'" >Greet</button>
  {{greeting}}
  `,
  styleUrls: []
})
export class TestComponent {

  public title="Praveenkumar";
  public greeting ="";


  constructor (){}
  
  onClick(event: any){
    console.log(event)
    this.greeting=event.type;
  }

}
