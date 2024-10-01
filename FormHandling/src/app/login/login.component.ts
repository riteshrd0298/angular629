import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  birtDate:any;

  genderMapping = {
    'male': 'He',
    'female': 'She',
    'other': 'They'
  };

gender='male'

  username: any = '';
  password: any = '';

  xyz(myForm: any) {
   this.username = myForm.value.username;
    this.password = myForm.value.password;
    alert(this.username +" "+this.password);
  }

  abc() {
    console.log(this.username);
  }
}
