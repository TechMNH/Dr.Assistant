import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorSigninComponent } from './doctor-signin/doctor-signin.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { CheckUpComponent } from './check-up/check-up.component';
import { BaseModule } from '../base/base.module';
import { CommonModule } from '@angular/common';
import { FormFillupComponent } from './form-fillup/form-fillup.component';


@NgModule({
  declarations: [
    DoctorSigninComponent,
    DoctorSignupComponent,
    DoctorDashboardComponent,
    PrescriptionComponent,
    CheckUpComponent,
    FormFillupComponent
  ],
  imports: [
    DoctorRoutingModule,
    FormsModule,
    CommonModule,
    BaseModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
