import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate} from '@angular/router';
import {AuthService} from "../Services/auth.service";

@Injectable({ providedIn: 'root'})

export class AuthGuard implements CanActivate{
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //console.log('AuthGuard#canActivate called');
    // @ts-ignore
    const currentUser = JSON.parse( localStorage.getItem('currentUser'));
    if (currentUser && currentUser.user.isAdmin) {
      return true;
    }
    console.log(currentUser);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
