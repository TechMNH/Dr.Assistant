import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireDatabase } from 'src/app/utility/services/fire-db.service';
import { LoggerService } from 'src/app/utility/services/logger.service';
import { AdminProfile } from '../../models/admin.model';
import { DataService } from '../../utility/services/data.service';
import { FireAuthService } from '../../utility/services/fire-auth.service';

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
  private passwordRegex: RegExp = /^(?=.*[0-9]).{1,}(?=.*[a-z]).{1,}(?=.*[A-Z]).{1,}(?=.*[!@#$&*]).{1,}.{8,}$/;
  constructor(
    private dataService: DataService,
    private fireAuthService: FireAuthService,
    private FireDatabase: FireDatabase,
    private loggerService: LoggerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminProfile = new AdminProfile();
  }

  emailSignup() {
    const passwordStrength = !!this.passwordRegex.test(this.adminProfile.identificationDetails.password.password);
    if (this.adminProfile.identificationDetails.password.password == this.confirmPassword) {
      const password: string = this.adminProfile.identificationDetails.password.password;
      const email: string = this.adminProfile.identificationDetails.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          this.adminProfile.identificationDetails.password.strength = 'strong';
        }
        this.adminProfile.identificationDetails.uid.id = data.user.uid;
        this.adminProfile.identificationDetails.uid.type = 'admin';
        this.adminProfile.identificationDetails.password.lastChanged = new Date();
        this.dataService.adminProfile = this.adminProfile;
        this.FireDatabase.createNewUser(this.adminProfile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as admin`, 'info');
        }).catch(err => this.loggerService.log(err, 'error'));
        this.router.navigateByUrl('/admin/dashboard');
      }).catch(err => this.loggerService.log(err, 'error'))
    } else {
      console.log('Password Mismatch')
    }
  }

  redirectTo(project) {
    this.router.navigateByUrl('/' + project);
  }
}
