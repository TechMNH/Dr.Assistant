import { NgModule } from '@angular/core';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientSigninComponent } from './patient-signin/patient-signin.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultationComponent } from './consultation/consultation.component';
import { BaseModule } from '../base/base.module';
import { CommonModule } from '@angular/common';
import { FormFillupComponent } from './form-fillup/form-fillup.component';


@NgModule({
  declarations: [
    PatientSigninComponent,
    PatientSignupComponent,
    PatientDashboardComponent,
    ConsultationComponent,
    FormFillupComponent
  ],
  imports: [
    PatientsRoutingModule,
    FormsModule,
    CommonModule,
    BaseModule,
    ReactiveFormsModule
  ]
})
export class PatientsModule { }
