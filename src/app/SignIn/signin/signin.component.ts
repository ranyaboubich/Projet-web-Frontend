import { Component } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(
    private authService: AuthService
  ) {
  }

  signIn(form:NgForm){
    console.log(form.value);
    const { email, username, pass } = form.value;
    this.authService.signIn(email, username, pass).subscribe(user => {
      if (user) {
        console.log('signin successful');
      } else {
        console.log('signin failed');
      }
    });
  }
}
