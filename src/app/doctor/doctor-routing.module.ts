import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorSigninComponent } from './doctor-signin/doctor-signin.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin'
  },
  {
    path: 'signin',
    component: DoctorSigninComponent
  },
  {
    path: 'signup',
    component: DoctorSignupComponent
  },
  {
    path: 'dashboard',
    component: DoctorDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
