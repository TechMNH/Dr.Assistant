import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { PrescriptionModule } from './prescription/prescription.module';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    FormsModule,
    DoctorRoutingModule,
    PrescriptionModule,
  ],
  exports: [DoctorComponent]
})
export class DoctorModule { }
