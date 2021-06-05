import { Component, OnInit } from '@angular/core';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { SignupService } from 'src/app/utility/services/signup.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.scss']
})
export class DoctorSignupComponent implements OnInit {
  public doctorProfile: DoctorProfile;
  public confirmPassword: string = null;
  constructor(public signUpService: SignupService) { }

  ngOnInit(): void {
    this.doctorProfile = new DoctorProfile();
  }
}
