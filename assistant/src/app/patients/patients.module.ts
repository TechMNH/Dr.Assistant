import { NgModule } from '@angular/core';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  declarations: [PatientsComponent],
  imports: [
    PatientsRoutingModule
  ],
  exports: [PatientsComponent]
})
export class PatientsModule { }
