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
    this.authService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status.loggedIn;
      console.log(status);
    });
  }

  logout() {
    this.dataService.resetProfile;
  }
}
