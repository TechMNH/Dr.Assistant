import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { DataService } from 'src/app/utility/services/data.service';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { FireDatabase } from 'src/app/utility/services/fire-db.service';
import { LoggerService } from 'src/app/utility/services/logger.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.scss']
})
export class DoctorSignupComponent implements OnInit {
  public doctorProfile: DoctorProfile;
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
    this.doctorProfile = new DoctorProfile();
  }

  emailSignup() {
    const passwordStrength = !!this.passwordRegex.test(this.doctorProfile.identificationDetails.password.password);
    if (this.doctorProfile.identificationDetails.password.password == this.confirmPassword) {
      const password: string = this.doctorProfile.identificationDetails.password.password;
      const email: string = this.doctorProfile.identificationDetails.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          this.doctorProfile.identificationDetails.password.strength = 'strong';
        }
        this.doctorProfile.identificationDetails.uid.id = data.user.uid;
        this.doctorProfile.identificationDetails.uid.type = 'doc';
        this.doctorProfile.identificationDetails.password.lastChanged = new Date();
        this.dataService.doctorProfile = this.doctorProfile;
        this.FireDatabase.createNewUser(this.doctorProfile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as doctor`, 'info');
        }).catch(err => this.loggerService.log(err, 'error'));
        this.router.navigateByUrl('/doctor/dashboard');
      }).catch(err => this.loggerService.log(err, 'error'))
    } else {
      this.loggerService.log(`Password Mismatch: ${this.doctorProfile.identificationDetails.email}`, 'error')
    }
  }
}
