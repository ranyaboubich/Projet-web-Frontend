import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(
    public authService: AuthService
  ) {
  }
  // @ts-ignore
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //getButtonText(){
  //  return this.authService.IsLoggedIn() ? 'Logout' : 'Login';
  //}

  ngOnInit(): void {
    //console.log('Im the admin',this.currentUser.user.isAdmin);
  }


}
