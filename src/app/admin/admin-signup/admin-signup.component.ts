import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/utility/services/signup.service';
import { AdminProfile } from '../../models/admin.model';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class AdminSignupComponent implements OnInit {

  public adminProfile: AdminProfile;
  public confirmPassword: string = null;
  constructor(public signUpService: SignupService) { }

  ngOnInit(): void {
    this.adminProfile = new AdminProfile();
  }

  emailSignup() {
  }
}
