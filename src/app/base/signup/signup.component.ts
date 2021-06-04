import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestProfile } from 'src/app/models/guest.model';
import { DataService } from 'src/app/utility/services/data.service';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { FireDatabase } from 'src/app/utility/services/fire-db.service';
import { LoggerService } from 'src/app/utility/services/logger.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class SignupComponent implements OnInit {

  public readonly randNo: number = Math.ceil(Math.random() * (15 - 1) + 1);
  public readonly iconNo: number = (this.randNo < 5) ? 1 : (this.randNo < 10) ? 2 : 3;
  public readonly doctorUrl: string = `assets/signup-page/doctor-${this.iconNo}.svg`;
  public readonly patientUrl: string = `assets/signup-page/patient-${this.iconNo}.svg`;
  public readonly adminUrl: string = `assets/signup-page/admin-${this.iconNo}.svg`;
  public readonly guestUrl: string = `assets/signup-page/guest-${this.iconNo}.svg`;

  public guestProfile: GuestProfile;
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
    this.guestProfile = new GuestProfile();
  }

  emailSignup() {
    const passwordStrength = !!this.passwordRegex.test(this.guestProfile.password.password);
    if (this.guestProfile.password.password == this.confirmPassword) {
      const password: string = this.guestProfile.password.password;
      const email: string = this.guestProfile.email;
      this.fireAuthService.BasicSignUp(email, password).then(data => {
        if (passwordStrength) {
          this.guestProfile.password.strength = 'strong';
        }
        this.guestProfile.uid.id = data.user.uid;
        this.guestProfile.uid.type = 'guest';
        this.guestProfile.password.lastChanged = new Date();
        this.dataService.guestProfile = this.guestProfile;
        this.FireDatabase.createNewGuestUser(this.guestProfile).then(() => {
          this.loggerService.log(`${data.user.uid}-added to database as guest`, 'info');
        }).catch(err => this.loggerService.log(err, 'error'));
      this.router.navigateByUrl('/home/guest/dashboard');
      }).catch(err => this.loggerService.log(err, 'error'))
    } else {
      this.loggerService.log(`Password Mismatch: ${this.guestProfile.email}`, 'error');
    }
  }
}
