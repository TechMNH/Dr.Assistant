import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorSigninComponent } from './doctor-signin/doctor-signin.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';


@NgModule({
  declarations: [DoctorSigninComponent, DoctorSignupComponent, DoctorDashboardComponent],
  imports: [
    FormsModule,
    DoctorRoutingModule,
    FormsModule
  ],
  exports: [DoctorSigninComponent, DoctorSignupComponent]
})
export class DoctorModule { }
