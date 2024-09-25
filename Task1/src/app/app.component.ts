import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';

  selectedNumber: number = 1; // Default value
  list: number[] = [];

  printTable(): void {
    this.list = []; // Reset the table
    for (let i = 1; i <= 10; i++) {
      this.list.push(this.selectedNumber * i);
    }
  }

}
