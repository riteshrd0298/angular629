import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})

export class StudentprofileComponent implements OnInit {

  studentId: number | null = null;
  student: any = {};  // To hold the student's data

  // Static student list (same as in StudentListComponent)
  studentList = [
    { id: 1, name: 'Manali', batch_number: 101 },
    { id: 2, name: 'Namrata', batch_number: 102 },
    { id: 3, name: 'Ritesh', batch_number: 103 },
    { id: 4, name: 'Rajdeep', batch_number: 104 }
  ];
  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    // Get the student ID from the URL
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    // Find the student based on the ID
    this.student = this.studentList.find(student => student.id === this.studentId);
  }
}