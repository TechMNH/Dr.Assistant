import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FireAuthService } from "./fire-auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.isLoggedIn !== true) {
    //   this.router.navigateByUrl('home')
    //   return false;
    // }
    return true;
  }

}

export class DoctorGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.isLoggedIn !== true) {
    //   this.router.navigateByUrl('home')
    //   return false;
    // }
    return true;
  }

}

export class PatientGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.isLoggedIn !== true) {
    //   this.router.navigateByUrl('home')
    //   return false;
    // }
    return true;
  }

}

export class GuestGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.isLoggedIn !== true) {
    //   this.router.navigateByUrl('home')
    //   return false;
    // }
    return true;
  }

}