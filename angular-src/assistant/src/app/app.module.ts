import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from 'admin';
import { DoctorModule } from 'doctor';
import { PatientsModule } from 'patients';
import { SignupModule } from 'signup';
import { UtilityModule } from 'utility';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DoctorModule,
    PatientsModule,
    SignupModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
