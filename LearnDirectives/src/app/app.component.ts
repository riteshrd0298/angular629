import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LearnDirectives';

  color = 'white';

  data: any = {
    username: 'ram',
    password: '123',
  };

  //1
  numbers: any = [1, 2, 3, 4];

  students: any = [
    {
      id: 1,
      name: 'ram',
      age: 25,
    },
    {
      id: 2,
      name: 'sham',
      age: 27,
    },
  ];

  // Attribute Directives
 // ngClass
  isHighlight = false;
  highlightOnOff() {
    this.isHighlight = !this.isHighlight;
  }
// ngStyle
  fontSize = '30px';
  increase() {
    this.fontSize = parseInt(this.fontSize) + 2 + 'px';
  }

  decrease() {
    this.fontSize = parseInt(this.fontSize) - 2 + 'px';
  }
}
