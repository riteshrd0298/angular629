import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any = '';
  password: any = '';

  constructor(private r:Router){

  }

  login() {
    if (this.username === 'ritesh' && this.password === '3366') {
      // nevigate to home
      this.r.navigate(['/home']);
    } else {
      // nevigate to login
      alert("Invalid Credientials")
      this.r.navigate(['/login']);
    }
  }
}
