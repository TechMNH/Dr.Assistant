import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientSigninComponent } from './patient-signin/patient-signin.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin'
  },
  {
    path: 'signin',
    component: PatientSigninComponent
  },
  {
    path: 'signup',
    component: PatientSignupComponent
  },
  {
    path: 'dashboard',
    component: PatientDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
