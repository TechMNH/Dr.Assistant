import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/utility/services/signin.service';

@Component({
  selector: 'app-doctor-signin',
  templateUrl: './doctor-signin.component.html',
  styleUrls: ['./doctor-signin.component.scss']
})
export class DoctorSigninComponent implements OnInit {

  public email: string = null;
  public password: string = null;

  constructor(public signInService: SigninService) { }

  ngOnInit(): void {
  }
}
