import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {


  student: any = [
    {
      id: 1,
      name: "Ritesh",
      batch_number: 101
    },
    {
      id: 2,
      name: "Rajdeep",
      batch_number: 102
    },
    {
      id: 3,
      name: "Manali",
      batch_number: 103
    },
    {
      id: 4,
      name: "Pratik",
      batch_number: 104
    }
  ]
}
