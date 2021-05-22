import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [DoctorComponent, SigninComponent],
  imports: [
    FormsModule,
    DoctorRoutingModule,
    PrescriptionModule,
    ReactiveFormsModule
  ],
  exports: [DoctorComponent]
})
export class DoctorModule { }
