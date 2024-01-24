import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private authService: AuthService){
  }

  login(form:NgForm){
    console.log(form.value);
    const { email, pass } = form.value;
    this.authService.login(email, pass).subscribe(user => {
      if (user) {
        console.log('Login successful');
      } else {
        console.log('Login failed');
      }
    });
  }
}
