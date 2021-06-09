import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ErrorMessage, ErrorService } from 'src/app/utility/services/error.service';
import { LoaderService } from 'src/app/utility/services/loader.service';
import { SigninService } from 'src/app/utility/services/signin.service';

@Component({
  selector: 'app-doctor-signin',
  templateUrl: './doctor-signin.component.html',
  styleUrls: ['./doctor-signin.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class DoctorSigninComponent implements OnInit {

  public email: string = null;
  public password: string = null;
  public onError: boolean = false;
  public errorMessage: ErrorMessage = null;
  public loader: boolean = false;

  constructor(
    public signInService: SigninService,
    private errorService: ErrorService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.errorService.error = null;
    this.loaderService.loader = false;
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
  }
}
