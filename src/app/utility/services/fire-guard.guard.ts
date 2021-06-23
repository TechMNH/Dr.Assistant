import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FireAuthService } from "./fire-auth.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    private loggerService: LoggerService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(map(status => {
      this.loggerService.log(JSON.stringify(status), 'info');
      if (status.loggedIn && status.type == 'admin') return true;
      else {
        this.router.navigateByUrl('/home');
        return false
      };
    }));
  }

}

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    private loggerService: LoggerService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(map(status => {
      this.loggerService.log(JSON.stringify(status), 'info');
      if (status.loggedIn && status.type == 'doc') return true;
      else {
        this.router.navigateByUrl('/home');
        return false
      };
    }));
  }

}

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    private loggerService: LoggerService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(map(status => {
      this.loggerService.log(JSON.stringify(status), 'info');
      if (status.loggedIn && status.type == 'pat') return true;
      else {
        this.router.navigateByUrl('/home');
        return false
      };
    }));
  }

}

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    private loggerService: LoggerService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn.pipe(map(status => {
      this.loggerService.log(JSON.stringify(status), 'info');
      if (status.loggedIn && status.type == 'guest') return true;
      else {
        this.router.navigateByUrl('/home');
        return false
      };
    }));
  }
}