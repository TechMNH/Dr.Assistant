import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/utility/services/fire-auth.service';
import { FireDB } from 'src/app/utility/services/fire-db.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent implements OnInit {

  constructor(private fireAuthService: FireAuthService, private fireDb: FireDB) { }

  ngOnInit(): void {
  }

  emailSignin() {
    this.fireAuthService.BasicSignIn('example@example.com', '786&*Lurisan').then(data => {
      this.fireDb.getUser().subscribe(data => {
        data.docs.forEach(data => {
          console.log(data.data())
        })
      })
    }).catch(err => {
      console.log(err);
    })
  }

}
