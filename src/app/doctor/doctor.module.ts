import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { CheckUpComponent } from './check-up/check-up.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { PrescriptionComponent } from './prescription/prescription.component';


@NgModule({
  declarations: [
    DoctorDashboardComponent,
    PrescriptionComponent,
    CheckUpComponent
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
