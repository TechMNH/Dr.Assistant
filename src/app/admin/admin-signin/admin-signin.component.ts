import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfile } from 'src/app/models/admin.model';
import { DataService } from 'src/app/utility/services/data.service';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { LoggerService } from 'src/app/utility/services/logger.service';
import { CookieStorageService } from 'src/app/utility/services/storage.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class AdminSigninComponent implements OnInit {

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
      this.fireAuthService.BasicSignIn(this.email, this.password, 'admin').then(user => {
        this.dataService.adminProfile = user as AdminProfile;
        this.cookieStorageService.storeCookies(
          this.dataService.adminProfile.identificationDetails.uid.id,
          this.dataService.adminProfile,
          this.dataService.adminProfile.identificationDetails.uid.id
        );
        this.router.navigateByUrl('admin/dashboard');
      }).catch(err => this.loggerService.log(err, 'error'))
  }

  redirectTo(project) {
    this.router.navigateByUrl('/' + project);
  }
}
