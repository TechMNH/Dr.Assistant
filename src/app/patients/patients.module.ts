import { NgModule } from '@angular/core';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientSigninComponent } from './patient-signin/patient-signin.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';


@NgModule({
  declarations: [PatientSigninComponent, PatientSignupComponent, PatientDashboardComponent],
  imports: [
    PatientsRoutingModule
  ],
  exports: [PatientSigninComponent, PatientSignupComponent]
})
export class PatientsModule { }
