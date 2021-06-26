import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AdminProfile } from 'src/app/models/admin.model';
import { UserTypes } from 'src/app/models/common.model';
import { DoctorProfile } from 'src/app/models/doctor.model';
import { PatientProfile } from 'src/app/models/patient.model';
import { AnyButGuestProfile } from 'src/app/utility/services/data.service';
import { ErrorMessage, ErrorService } from 'src/app/utility/services/error.service';
import { FormsService } from 'src/app/utility/services/forms.service';
import { LoaderService } from 'src/app/utility/services/loader.service';
import { SignupService } from 'src/app/utility/services/signup.service';
import { GuestProfile } from '../../models/guest.model';

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
  public profile: AnyButGuestProfile;
  public confirmPassword: string = null;
  public onError: boolean = false;
  public errorMessage: ErrorMessage = null;
  public loader: boolean = false;
  public user: string = null;

  constructor(
    public signUpService: SignupService,
    private errorService: ErrorService,
    private loaderService: LoaderService,
    public formsService: FormsService
  ) { }

  ngOnInit(): void {
    this.errorService.error = null;
    this.loaderService.loader = false;
    this.guestProfile = new GuestProfile();
    this.profile = new PatientProfile();

    this.errorService.errorAsObservable.subscribe(error => {
      if (error) {
        this.errorMessage = error;
        this.loader = false;
        this.onError = true;
      }
    });

    this.loaderService.loaderAsObservable.subscribe(loader => {
      this.loader = loader;
    });

    this.formsService.guestSignupForm.valueChanges.subscribe(data => {
      this.confirmPassword = data.confirmPassword;
      this.guestProfile.fullName = data.firstName;
      this.guestProfile.email = data.email;
      this.guestProfile.password.password = data.password;
    });

    this.formsService.signupForm.valueChanges.subscribe(data => {
      this.confirmPassword = data.confirmPassword;
      this.profile.identificationDetails.firstName = data.firstName;
      this.profile.identificationDetails.lastName = data.lastName;
      this.profile.identificationDetails.displayName = data.displayName;
      this.profile.identificationDetails.email = data.email;
      this.profile.identificationDetails.password.password = data.password;
    });
  }

  signUp(userType: UserTypes) {
    if (userType === 'admin')
      this.profile = new AdminProfile();
    else if (userType === 'doc')
      this.profile = new DoctorProfile();
    else if (userType === 'pat')
      this.profile = new PatientProfile();
  }
}
