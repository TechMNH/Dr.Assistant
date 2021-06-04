import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class ErrorPageComponent implements OnInit {

  public randomError: number = Math.ceil(Math.random() * (15 - 1) + 1);
  public errorTitle: string = 'Error'; // 'Notice'; ''Error';

  public errorDescription1: string = 'Look like you\'re lost'; // 'Looks like you\'re early'; 'Look like you\'re lost';
  public errorDescription2: string = 'The doctor you are looking for is not available'; // 'The doctor you are looking for is not available'; 'The page you are looking for is not available YET!'; 
  public showHomeButton: boolean = true;

  public errorDescription3: string = 'Doctor Not Found'; // 'Doctor Not Found'; 'Site Under Construction'; // 

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.config)
    console.log(this.route.data)
  }
}
