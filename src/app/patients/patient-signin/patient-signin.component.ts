import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/utility/services/signin.service';

@Component({
  selector: 'app-patient-signin',
  templateUrl: './patient-signin.component.html',
  styleUrls: ['./patient-signin.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class PatientSigninComponent implements OnInit {


  public email: string = null;
  public password: string = null;

  constructor(public signInService: SigninService) { }

  ngOnInit(): void {
  }
}
