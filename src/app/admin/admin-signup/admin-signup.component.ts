import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ErrorMessage, ErrorService } from 'src/app/utility/services/error.service';
import { FormsService } from 'src/app/utility/services/forms.service';
import { LoaderService } from 'src/app/utility/services/loader.service';
import { SignupService } from 'src/app/utility/services/signup.service';
import { AdminProfile } from '../../models/admin.model';

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

  public profile: AdminProfile;
  public confirmPassword: string = null;
  public onError: boolean = false;
  public errorMessage: ErrorMessage = null;
  public loader: boolean = false;

  constructor(
    public signUpService: SignupService,
    private errorService: ErrorService,
    private loaderService: LoaderService,
    public formsService: FormsService
  ) { }

  ngOnInit(): void {
    this.errorService.error = null;
    this.loaderService.loader = false;
    this.profile = new AdminProfile();
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
    this.formsService.signupForm.valueChanges.subscribe(data => {
        this.confirmPassword = data.confirmPassword;
        this.profile.identificationDetails.firstName = data.firstName;
        this.profile.identificationDetails.lastName = data.lastName;
        this.profile.identificationDetails.displayName = data.displayName;
        this.profile.identificationDetails.email = data.email;
        this.profile.identificationDetails.password = data.password;
    });
  }
}
