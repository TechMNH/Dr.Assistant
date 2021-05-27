import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  randomError: number = Math.ceil(Math.random() * (15 - 1) + 1);
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(route) {
    this.router.navigateByUrl('/' + route);
  }

}
