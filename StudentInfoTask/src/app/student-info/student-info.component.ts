import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  genderMapping = {
    "male": "Mr.",
    "female": "Ms.",
    "other": "NA"
  };

  studentName: string = '';
  batchNumber: number | null = null;
  gender: string = '';
  birthDate: any;
  studentEntries: any = [];  // Simplified declaration

  onSubmit(form: NgForm) {
    // Add the submitted form data to the studentEntries array
    this.studentEntries.push({
      studentName: this.studentName,
      batchNumber: this.batchNumber,
      gender: this.gender,
      birthDate: this.birthDate
    });

    // Reset the form after submission
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.studentName = '';
    this.batchNumber = null;
    this.gender = '';
    this.birthDate = null;
  }
}
