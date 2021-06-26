import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  declarations: [
    PatientDashboardComponent,
    ConsultationComponent
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
