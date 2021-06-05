import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PatientProfile } from 'src/app/models/patient.model';
import { SignupService } from 'src/app/utility/services/signup.service';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class PatientSignupComponent implements OnInit {

  public patientProfile: PatientProfile;
  public confirmPassword: string = null;
  constructor(public signUpService: SignupService) { }

  ngOnInit(): void {
    this.patientProfile = new PatientProfile();
  }
}
