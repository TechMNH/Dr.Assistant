import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfile } from 'src/app/models/admin.model';
import { UserTypes } from 'src/app/models/common.model';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { PatientProfile } from 'src/app/models/patient.model';
import { Constants } from '../constants/constants';
import { DataService } from './data.service';
import { ErrorService } from './error.service';
import { FireAuthService } from './fire-auth.service';
import { LoaderService } from './loader.service';
import { LoggerService } from './logger.service';
import { CookieStorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private fireAuthService: FireAuthService,
    private dataService: DataService,
    private loggerService: LoggerService,
    private cookieStorageService: CookieStorageService,
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

  public basicEmailSignin(email: string, password: string, userType: UserTypes) {
    this.loaderService.loader = true;
    if (email && password)
      this.fireAuthService.BasicSignIn(email, password, userType).then(profile => {
        if (profile && profile.identificationDetails)
          if (profile.identificationDetails.uid.type == 'admin') {
            this.loaderService.loader = false;
            this.dataService.adminProfile = profile as AdminProfile;
            this.dataService.userType = userType;
            this.navigateByUrl(Constants.ADMIN_DASHBOARD);
            this.cookieStorageService.storeCookies(
              this.dataService.adminProfile.identificationDetails.uid.id,
              this.dataService.adminProfile,
              this.dataService.adminProfile.identificationDetails.uid.id
            );
          } else if (profile.identificationDetails.uid.type == 'doc') {
            this.loaderService.loader = false;
            this.dataService.doctorProfile = profile as DoctorProfile;
            this.dataService.userType = Constants.USER_TYPE_DOCTOR;
            this.navigateByUrl(Constants.DOCTOR_DASHBOARD);
            this.cookieStorageService.storeCookies(
              this.dataService.doctorProfile.identificationDetails.uid.id,
              this.dataService.doctorProfile,
              this.dataService.doctorProfile.identificationDetails.uid.id
            );
          } else if (profile.identificationDetails.uid.type == 'pat') {
            this.loaderService.loader = false;
            this.dataService.patientProfile = profile as PatientProfile;
            this.dataService.userType = Constants.USER_TYPE_PATIENT;
            this.navigateByUrl(Constants.PATIENT_DASHBOARD);
            this.cookieStorageService.storeCookies(
              this.dataService.patientProfile.identificationDetails.uid.id,
              this.dataService.patientProfile,
              this.dataService.patientProfile.identificationDetails.uid.id
            );
          }
          else
            this.errorService.error = {
              title: Constants.ERROR_TITLE_AUTHORIZATION,
              message: `${Constants.ERROR_MESSAGE_AUTHORIZATION.message} ${Constants.ERROR_MESSAGE_AUTHORIZATION[userType]}`
            }
        else
          this.errorService.error = {
            title: Constants.ERROR_TITLE_AUTHORIZATION,
            message: `${Constants.ERROR_MESSAGE_AUTHORIZATION.message} ${Constants.ERROR_MESSAGE_AUTHORIZATION[userType]}`
          };
      }).catch(err => {
        this.errorService.error = { title: Constants.ERROR_TITLE_LOGIN, message: err.message };
        this.loggerService.log(err, Constants.LOG_LEVEL_ERROR);
      });
    else if (!email)
      this.errorService.error = {
        title: Constants.ERROR_TITLE_DATA_ENTRY,
        message: `${Constants.ERROR_MESSAGE_DATA_ENTRY.message} ${Constants.ERROR_MESSAGE_DATA_ENTRY.email}`
      };
    else if (!password)
      this.errorService.error = {
        title: Constants.ERROR_TITLE_DATA_ENTRY,
        message: `${Constants.ERROR_MESSAGE_DATA_ENTRY.message} ${Constants.ERROR_MESSAGE_DATA_ENTRY.password}`
      };
    else
      this.errorService.error = {
        title: Constants.ERROR_TITLE_DATA_ENTRY,
        message: `${Constants.ERROR_MESSAGE_DATA_ENTRY.message} ${Constants.ERROR_MESSAGE_DATA_ENTRY.emailAndPassword}`
      };
  }

  public basicEmailGuestSignin(email: string, password: string) {
    this.loaderService.loader = true;
    if (email && password)
      this.fireAuthService.BasicGuestSignIn(email, password, Constants.USER_TYPE_GUEST).then(profile => {
        if (profile) {
          this.loaderService.loader = false;
          this.dataService.guestProfile = profile;
          this.dataService.userType = Constants.USER_TYPE_GUEST;
          this.navigateByUrl(Constants.GUEST_DASHBOARD);
          this.cookieStorageService.storeCookies(
            this.dataService.guestProfile.uid.id,
            this.dataService.guestProfile,
            this.dataService.guestProfile.uid.id
          );
        } else
          this.errorService.error = {
            title: Constants.ERROR_TITLE_AUTHORIZATION,
            message: `${Constants.ERROR_MESSAGE_AUTHORIZATION.message} ${Constants.ERROR_MESSAGE_AUTHORIZATION.guest}`
          };
      }).catch(err => {
        this.errorService.error = { title: Constants.ERROR_TITLE_LOGIN, message: err.message };
        this.loggerService.log(err, Constants.LOG_LEVEL_ERROR);
      })
    else if (!email)
      this.errorService.error = {
        title: Constants.ERROR_TITLE_DATA_ENTRY,
        message: `${Constants.ERROR_MESSAGE_DATA_ENTRY.message} ${Constants.ERROR_MESSAGE_DATA_ENTRY.email}`
      };
    else if (!password)
      this.errorService.error = {
        title: Constants.ERROR_TITLE_DATA_ENTRY,
        message: `${Constants.ERROR_MESSAGE_DATA_ENTRY.message} ${Constants.ERROR_MESSAGE_DATA_ENTRY.password}`
      };
    else
      this.errorService.error = {
        title: Constants.ERROR_TITLE_DATA_ENTRY,
        message: `${Constants.ERROR_MESSAGE_DATA_ENTRY.message} ${Constants.ERROR_MESSAGE_DATA_ENTRY.emailAndPassword}`
      };
  }
}
