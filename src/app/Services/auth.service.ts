import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUserValue: any;
  public accessToken: any;

  constructor(
    private http: HttpClient,
    private router: Router){
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }

  login(email: string, password: string)
  {
    console.log(email, password)
    return this.http.post<any>('http://localhost:3000/auth/login', { email, password }).pipe(map(user => {
      console.log(user);
      console.log(user.access_token);
      if (user.user && user.access_token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.currentUserValue = user;
        this.accessToken = user.access_token;
      }
      this.router.navigate(['library']);
    return user;
  }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['login'])
  }

  signIn(email: string, username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/auth/signin', { email, username, password }).pipe(map(user => {
      if (user.user && user.access_token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      console.log(user);
      this.router.navigate(['library']);
      return user;
    }));
  }

  IsLoggedIn() {
    return this.currentUserSubject.value && this.currentUserSubject.value.user;
  }

}
