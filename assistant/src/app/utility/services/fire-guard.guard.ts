import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FireAuthService } from "./fire-auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FireGuard implements CanActivate {

  constructor(
    public authService: FireAuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigateByUrl('home')
      return false;
    }
    return true;
  }

}