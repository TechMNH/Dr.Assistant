import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { DataService } from 'src/app/utility/services/data.service';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { LoggerService } from 'src/app/utility/services/logger.service';
import { CookieStorageService } from 'src/app/utility/services/storage.service';

@Component({
  selector: 'app-doctor-signin',
  templateUrl: './doctor-signin.component.html',
  styleUrls: ['./doctor-signin.component.scss']
})
export class DoctorSigninComponent implements OnInit {

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
      this.fireAuthService.BasicSignIn(this.email, this.password, 'doc').then(user => {
        this.dataService.doctorProfile = user as DoctorProfile;
        this.cookieStorageService.storeCookies(
          this.dataService.doctorProfile.identificationDetails.uid.id,
          this.dataService.doctorProfile,
          this.dataService.doctorProfile.identificationDetails.uid.id
        );
        this.router.navigateByUrl('doctor/dashboard');
      }).catch(err => this.loggerService.log(err, 'error'))
  }

  redirectTo(project) {
    this.router.navigateByUrl('/' + project);
  }
}
