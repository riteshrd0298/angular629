import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MyFirstNgApp';

  num:any=10;

  obj={
    "name":"xyz"
  }

  arr=[1,2,3];

  isValid=false;

  // Property Binding

  val1=20;

  wantTodesable=false;


  // event binding

clickMe(){
  const a=10;
  const b=20;
console.log(a+b);
}
mouseOver() {
  alert("mouse over")
  }

  // two way data binding

  myval=10;


}
