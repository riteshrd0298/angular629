import { Component } from '@angular/core';

interface FeedbackEntry {
  studentName: string;
  batchNumber: number | null;
  feedback: string;
}

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {


genderMapping={
  "male":"Mr.",
  "female":"Ms.",
  "other": "NA"

}

  studentName: string = '';
  batchNumber: number | null = null;
  gender: string = '';
  birthDate:any;
  studentEntries: any = [];  // Simplified declaration

  onSubmit() {

      this.studentEntries.push({
        studentName: this.studentName,
        batchNumber: this.batchNumber,
        gender:this.gender,
        birthDate:this.birthDate
      });


  }

  resetForm(form: any) {
    form.resetForm();
    this.studentName = '';
    this.batchNumber = null;
    this.gender = '';
    this.birthDate=null
  }
}

