import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { PrescriptionModule } from './prescription/prescription.module';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    DoctorRoutingModule,
    PrescriptionModule
  ],
  exports: [DoctorComponent]
})
export class DoctorModule { }
