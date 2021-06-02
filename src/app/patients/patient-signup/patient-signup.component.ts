import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/patient.model';
import { DataService } from 'src/app/utility/services/data.service';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { FireDatabase } from 'src/app/utility/services/fire-db.service';
import { LoggerService } from 'src/app/utility/services/logger.service';

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
  private passwordRegex: RegExp = /^(?=.*[0-9]).{1,}(?=.*[a-z]).{1,}(?=.*[A-Z]).{1,}(?=.*[!@#$&*]).{1,}.{8,}$/;
  constructor(
    private dataService: DataService,
    private fireAuthService: FireAuthService,
    private FireDatabase: FireDatabase,
    private loggerService: LoggerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patientProfile = new PatientProfile();
  }

  emailSignup() {
    const passwordStrength = !!this.passwordRegex.test(this.patientProfile.identificationDetails.password.password);
    if (this.patientProfile.identificationDetails.password.password == this.confirmPassword) {
      const password: string = this.patientProfile.identificationDetails.password.password;
      const email: string = this.patientProfile.identificationDetails.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          this.patientProfile.identificationDetails.password.strength = 'strong';
        }
        this.patientProfile.identificationDetails.uid.id = data.user.uid;
        this.patientProfile.identificationDetails.uid.type = 'pat';
        this.patientProfile.identificationDetails.password.lastChanged = new Date();
        this.dataService.patientProfile = this.patientProfile;
        this.FireDatabase.createNewUser(this.patientProfile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as patient`, 'info');
          this.router.navigateByUrl('/patient/dashboard');
        }).catch(err => this.loggerService.log(err, 'error'));
      }).catch(err => this.loggerService.log(err, 'error'))
    } else {
      console.log('Password Mismatch')
    }
  }

  redirectTo(project) {
    this.router.navigateByUrl('/' + project);
  }
}
