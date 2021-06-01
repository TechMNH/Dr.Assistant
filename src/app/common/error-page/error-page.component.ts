import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  public randomError: number = Math.ceil(Math.random() * (15 - 1) + 1);
  public errorTitle: string = 'Notice'; // Error 
  
  public errorDescription1: string = 'Looks like you\'re early'; // Look like you're lost
  public errorDescription2: string = 'The page you are looking for is not available YET!'; // The doctor you are looking for is not available
  public showHomeButton: boolean = false;

  public errorDescription3: string = 'Site Under Construction'; // Doctor Not Found

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(route) {
    this.router.navigateByUrl('/' + route);
  }

}
