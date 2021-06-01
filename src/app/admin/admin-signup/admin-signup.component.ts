import { Component, OnInit } from '@angular/core';
import { FireDB } from 'src/app/utility/services/fire-db.service';
import { AdminProfile } from '../../models/admin.model';
import { DataService } from '../../utility/services/data.serice';
import { FireAuthService } from '../../utility/services/fire-auth.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  public adminProfile: AdminProfile;
  public confirmPassword: string = null;
  private passwordRegex: RegExp = /^(?=.*[0-9]).{1,}(?=.*[a-z]).{1,}(?=.*[A-Z]).{1,}(?=.*[!@#$&*]).{1,}.{8,}$/;
  constructor(
    private dataService: DataService,
    private fireAuthService: FireAuthService,
    private fireDb: FireDB
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
        console.log(data);
        if (passwordStrength) {
          this.adminProfile.identificationDetails.password.strength = 'strong';
        }
        this.adminProfile.identificationDetails.uid.id = data.user.uid;
        this.adminProfile.identificationDetails.uid.type = 'admin';
        this.adminProfile.identificationDetails.password.lastChanged = new Date();
        this.dataService.adminProfile = this.adminProfile;
        const userRef = this.fireDb.createNewUser(this.adminProfile);
      }).catch(err => {
        console.log(err);
      })
    } else {
      console.log('Password Mismatch')
    }
  }
}
