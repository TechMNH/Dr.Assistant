import { NgModule } from '@angular/core';
import { UtilityComponent } from './utility.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { FireAuthService } from './services/fire-auth.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [UtilityComponent],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAPq5bNLMQnODJYfCAOfnFvsNa8_ZznYpE",
      authDomain: "drassistant-5c854.firebaseapp.com",
      databaseURL: "https://drassistant-5c854.firebaseio.com",
      projectId: "drassistant-5c854",
      storageBucket: "drassistant-5c854.appspot.com",
      messagingSenderId: "683207221437",
      appId: "1:683207221437:web:afefb3ccecb47609e857d4",
      measurementId: "G-2S594WL943"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    UtilityRoutingModule
  ],
  providers: [FireAuthService],
  exports: [UtilityComponent]
})
export class UtilityModule { }
