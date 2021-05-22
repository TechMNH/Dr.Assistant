import { Component, OnInit } from '@angular/core';
import { FireAuthService } from './services/fire-auth.service';

@Component({
  selector: 'lib-utility',
  template: `
  <input type="text" [(ngModel)]="username">
  <input type="text" [(ngModel)]="password">
  <button class="btn-primary" (click)="SignIn()">SignIn</button>
  `,
  styles: [
  ],
})
export class UtilityComponent implements OnInit {

  username;
  password;
  constructor(private authService: FireAuthService) { }

  ngOnInit(): void {
  }

  SignIn() {
    this.authService.SignIn(this.username, this.password);
  }
}
