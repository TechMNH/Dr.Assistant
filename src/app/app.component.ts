import { Component, OnInit } from '@angular/core';
import { DataService } from './utility/services/data.service';
import { FireAuthService } from './utility/services/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(private authService: FireAuthService, private dataService: DataService) { }

  ngOnInit() {
    this.authService.loggedInAsObservable.subscribe(status => {
      if (status)
        this.isLoggedIn = status.loggedIn;
    });
  }

  logout() {
    this.dataService.resetProfile;
    this.authService.loggedIn = { loggedIn: false, type: null }
  }
}
