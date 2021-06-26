import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserTypes } from 'src/app/models/common.model';
import { ErrorMessage, ErrorService } from 'src/app/utility/services/error.service';
import { LoaderService } from 'src/app/utility/services/loader.service';
import { SigninService } from 'src/app/utility/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class SigninComponent implements OnInit {

  public email: string = null;
  public password: string = null;
  public onError: boolean = false;
  public errorMessage: ErrorMessage = null;
  public loader: boolean = false;
  public user: UserTypes = null;
  public message: string = null;

  constructor(
    public signInService: SigninService,
    private errorService: ErrorService,
    private loaderService: LoaderService,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loader = true;
    this.activatedroute.paramMap.subscribe(data => {
      this.loader = false;
      this.user = window.history.state.user as UserTypes;
      if (this.user === 'admin')
        this.message = 'Admin';
      else if (this.user === 'guest')
        this.message = 'Guest';
      else if (this.user === 'doc')
        this.message = 'Doctor';
      else if (this.user === 'pat')
        this.message = 'Patient';
    })
    this.errorService.error = null;
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
