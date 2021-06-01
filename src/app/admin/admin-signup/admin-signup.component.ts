import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  constructor(private fireAuthService: FireAuthService) { }

  ngOnInit(): void {
  }

  fbLogin() {
    this.fireAuthService.FacebookLogin().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }
}
