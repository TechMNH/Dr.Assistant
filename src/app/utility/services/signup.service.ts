import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfile } from 'src/app/models/admin.model';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { GuestProfile } from 'src/app/models/guest.model';
import { PatientProfile } from 'src/app/models/patient.model';
import { Constants } from '../constants/constants';
import { AnyButGuestProfile, DataService } from './data.service';
import { FireAuthService } from './fire-auth.service';
import { FireDatabase } from './fire-db.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private dataService?: DataService,
    private fireAuthService?: FireAuthService,
    private fireDatabase?: FireDatabase,
    private loggerService?: LoggerService,
    private router?: Router
  ) { }

  public navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }

  public navigate(path: [string]) {
    this.router.navigate(path);
  }

  public basicEmailSignupGuest(profile: GuestProfile, confirmPassword: string, dashboard: string = Constants.GUEST_DASHBOARD) {
    const passwordStrength = !!Constants.PASSWORD_REGEX.test(profile.password.password);
    if (profile.password.password == confirmPassword) {
      const password: string = profile.password.password;
      const email: string = profile.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          profile.password.strength = Constants.PASSWORD_STRENGTH_STRONG;
        }
        profile.uid.id = data.user.uid;
        profile.uid.type = Constants.USER_TYPE_GUEST;
        profile.password.lastChanged = new Date();
        this.dataService.guestProfile = profile;
        this.dataService.userType = Constants.USER_TYPE_GUEST;
        this.fireDatabase.createNewGuestUser(profile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as guest`, Constants.LOG_LEVEL_INFO);
        }).catch(err => this.loggerService.log(err,Constants.LOG_LEVEL_ERROR));
        this.navigateByUrl(dashboard);
      }).catch(err => this.loggerService.log(err,Constants.LOG_LEVEL_ERROR))
    } else {
      this.loggerService.log(`Password Mismatch: ${profile.email}`,Constants.LOG_LEVEL_ERROR);
    }
  }

  public basicEmailSignup(profile: AnyButGuestProfile, confirmPassword: string, dashboard?: string) {
    const passwordStrength = !!Constants.PASSWORD_REGEX.test(profile.identificationDetails.password.password);
    if (profile.identificationDetails.password.password == confirmPassword) {
      const password: string = profile.identificationDetails.password.password;
      const email: string = profile.identificationDetails.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          profile.identificationDetails.password.strength = Constants.PASSWORD_STRENGTH_STRONG;
        }
        profile.identificationDetails.uid.id = data.user.uid;
        profile.identificationDetails.password.lastChanged = new Date();
        if (profile.identificationDetails.uid.type == 'admin') {
          this.dataService.adminProfile = profile as AdminProfile;
          this.dataService.userType = Constants.USER_TYPE_ADMIN;
          this.navigateByUrl(Constants.ADMIN_DASHBOARD);
        } else if (profile.identificationDetails.uid.type == 'doc') {
          this.dataService.doctorProfile = profile as DoctorProfile;
          this.dataService.userType = Constants.USER_TYPE_DOCTOR;
          this.navigateByUrl(Constants.DOCTOR_DASHBOARD);
        } else if (profile.identificationDetails.uid.type == 'pat') {
          this.dataService.patientProfile = profile as PatientProfile;
          this.dataService.userType = Constants.USER_TYPE_PATIENT;
          this.navigateByUrl(Constants.PATIENT_DASHBOARD);
        }
        this.fireDatabase.createNewUser(profile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as ${this.dataService.userType}`, Constants.LOG_LEVEL_INFO);
        }).catch(err => this.loggerService.log(err, Constants.LOG_LEVEL_ERROR));
      }).catch(err => this.loggerService.log(err, Constants.LOG_LEVEL_ERROR))
    } else {
      this.loggerService.log(`Password Mismatch: ${profile.identificationDetails.email}`, Constants.LOG_LEVEL_ERROR)
    }
  }
}
