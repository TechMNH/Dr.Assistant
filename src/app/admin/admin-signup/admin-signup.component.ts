import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorMessage, ErrorService } from 'src/app/utility/services/error.service';
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

  public adminProfile: AdminProfile;
  public confirmPassword: string = null;
  public onError: boolean = false;
  public errorMessage: ErrorMessage = null;
  public loader: boolean = false;
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(
    public signUpService: SignupService,
    private errorService: ErrorService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.errorService.error = null;
    this.loaderService.loader = false;
    this.adminProfile = new AdminProfile();
    this.errorService.errorAsObservable.subscribe(error => {
      if (error) {
        this.errorMessage = error;
        this.loader = false;
        this.onError = true;
      }
    });
    this.loaderService.loaderAsObservable.subscribe(loader => {
      this.loader = loader;
    })
  }
}
