import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from '@angular/router';
import {AuthService} from "../Services/auth.service";

@Injectable({ providedIn: 'root'})

export class AuthGuard  {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['library'])
      // logged in so return true
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

    return false;
  }
}
