import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/patient.model';
import { DataService } from 'src/app/utility/services/data.service';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { LoggerService } from 'src/app/utility/services/logger.service';
import { CookieStorageService } from 'src/app/utility/services/storage.service';

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

  constructor(
    private fireAuthService: FireAuthService,
    private dataService: DataService,
    private loggerService: LoggerService,
    private cookieStorageService: CookieStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  emailSignin() {
    if (this.email && this.password)
      this.fireAuthService.BasicSignIn(this.email, this.password, 'pat').then(user => {
        this.dataService.patientProfile = user as PatientProfile;
        this.cookieStorageService.storeCookies(
          this.dataService.patientProfile.identificationDetails.uid.id,
          this.dataService.patientProfile,
          this.dataService.patientProfile.identificationDetails.uid.id
        );
        this.router.navigateByUrl('/patient/dashboard');
      }).catch(err => this.loggerService.log(err, 'error'))
  }
}
