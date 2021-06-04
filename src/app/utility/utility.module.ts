import { NgModule } from '@angular/core';
import { FireAuthService } from './services/fire-auth.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { FireDatabase } from './services/fire-db.service';


@NgModule({
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: 'http://localhost:4200/error',
      level: NgxLoggerLevel.ERROR,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    })
  ],
  providers: [FireAuthService, CookieService, FireDatabase]
})
export class UtilityModule { }
