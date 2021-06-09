import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfile } from 'src/app/models/admin.model';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { GuestProfile } from 'src/app/models/guest.model';
import { PatientProfile } from 'src/app/models/patient.model';
import { Constants } from '../constants/constants';
import { AnyButGuestProfile, DataService } from './data.service';
import { ErrorService } from './error.service';
import { FireAuthService } from './fire-auth.service';
import { FireDatabase } from './fire-db.service';
import { LoaderService } from './loader.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private dataService: DataService,
    private fireAuthService: FireAuthService,
    private fireDatabase: FireDatabase,
    private loggerService: LoggerService,
    private router: Router,
    private errorService: ErrorService,
    private loaderService: LoaderService
  ) { }

  public navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }

  public navigate(path: [string]) {
    this.router.navigate(path);
  }

  public basicEmailSignupGuest(profile: GuestProfile, confirmPassword: string) {
    this.loaderService.loader = true;
    const passwordStrength = !!Constants.PASSWORD_REGEX.test(profile.password.password);
    if (profile.password.password == confirmPassword) {
      const password: string = profile.password.password;
      const email: string = profile.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          profile.password.strength = Constants.PASSWORD_STRENGTH_STRONG;
        } else {
          this.errorService.error = {
            title: Constants.ERROR_TITLE_PASSWORD,
            message: `${Constants.ERROR_MESSAGE_PASSWORD_STRENGTH} ${Constants.PASSWORD_STRENGTH_WEAK}`
          }
        }
        profile.uid.id = data.user.uid;
        profile.uid.type = Constants.USER_TYPE_GUEST;
        profile.password.lastChanged = new Date();
        this.dataService.guestProfile = profile;
        this.dataService.userType = Constants.USER_TYPE_GUEST;
        this.fireDatabase.createNewGuestUser(profile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as guest`, Constants.LOG_LEVEL_INFO);
        }).catch(err => {
          this.errorService.error = {
            title: Constants.ERROR_TITLE_SIGNUP,
            message: `${data.user.uid}-${Constants.ERROR_MESSAGE_SIGNUP_DATABASE}`,
            hideDialog: true
          }
          this.loggerService.log(err, Constants.LOG_LEVEL_ERROR);
        });
        this.navigateByUrl(Constants.GUEST_DASHBOARD);
      }).catch(err => {
        this.errorService.error = {
          title: Constants.ERROR_TITLE_SIGNUP,
          message: err.message
        }
      });
    } else
      this.errorService.error = {
        title: Constants.ERROR_TITLE_PASSWORD,
        message: Constants.ERROR_MESSAGE_PASSWORD_MISMATCH
      }
  }

  public basicEmailSignup(profile: AnyButGuestProfile, confirmPassword: string) {
    this.loaderService.loader = true;
    const passwordStrength = !!Constants.PASSWORD_REGEX.test(profile.identificationDetails.password.password);
    if (profile.identificationDetails.password.password == confirmPassword) {
      const password: string = profile.identificationDetails.password.password;
      const email: string = profile.identificationDetails.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          profile.identificationDetails.password.strength = Constants.PASSWORD_STRENGTH_STRONG;
        } else {
          this.errorService.error = {
            title: Constants.ERROR_TITLE_PASSWORD,
            message: `${Constants.ERROR_MESSAGE_PASSWORD_STRENGTH} ${Constants.PASSWORD_STRENGTH_WEAK}`
          }
        }
        profile.identificationDetails.uid.id = data.user.uid;
        profile.identificationDetails.password.lastChanged = new Date();
        if (profile.identificationDetails.uid.type == 'admin') {
          this.loaderService.loader = false;
          this.dataService.adminProfile = profile as AdminProfile;
          this.dataService.userType = Constants.USER_TYPE_ADMIN;
          this.navigateByUrl(Constants.ADMIN_DASHBOARD);
        } else if (profile.identificationDetails.uid.type == 'doc') {
          this.loaderService.loader = false;
          this.dataService.doctorProfile = profile as DoctorProfile;
          this.dataService.userType = Constants.USER_TYPE_DOCTOR;
          this.navigateByUrl(Constants.DOCTOR_DASHBOARD);
        } else if (profile.identificationDetails.uid.type == 'pat') {
          this.loaderService.loader = false;
          this.dataService.patientProfile = profile as PatientProfile;
          this.dataService.userType = Constants.USER_TYPE_PATIENT;
          this.navigateByUrl(Constants.PATIENT_DASHBOARD);
        }
        this.fireDatabase.createNewUser(profile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as ${this.dataService.userType}`, Constants.LOG_LEVEL_INFO);
        }).catch(err => {
          this.errorService.error = {
            title: Constants.ERROR_TITLE_SIGNUP,
            message: `${data.user.uid}-${Constants.ERROR_MESSAGE_SIGNUP_DATABASE}`,
            hideDialog: true
          }
          this.loggerService.log(err, Constants.LOG_LEVEL_ERROR);
        });
      }).catch(err => {
        this.errorService.error = {
          title: Constants.ERROR_TITLE_SIGNUP,
          message: err.message
        }
      });
    } else
      this.errorService.error = {
        title: Constants.ERROR_TITLE_PASSWORD,
        message: Constants.ERROR_MESSAGE_PASSWORD_MISMATCH
      }
  }
}
