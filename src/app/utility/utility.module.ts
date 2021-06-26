import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoggerModule } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { FireDatabase } from './services/fire-db.service';


@NgModule({
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: environment.logger.serverLogUrl,
      level: environment.logger.localLogLevel,
      serverLogLevel: environment.logger.serverLogLevel,
      disableConsoleLogging: environment.logger.disableConsoleLogging
    })
  ],
  providers: [
    CookieService,
    FireDatabase
  ]
})
export class UtilityModule { }
