import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorSigninComponent } from './doctor-signin/doctor-signin.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { CheckUpComponent } from './check-up/check-up.component';
import { BaseModule } from '../base/base.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DoctorSigninComponent,
    DoctorSignupComponent,
    DoctorDashboardComponent,
    PrescriptionComponent,
    CheckUpComponent
  ],
  imports: [
    DoctorRoutingModule,
    FormsModule,
    CommonModule,
    BaseModule
  ]
})
export class DoctorModule { }
