import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../base/error-page/error-page.component';
import { PatientGuard } from '../utility/services/fire-guard.guard';
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
    component: PatientDashboardComponent,
    canActivate: [PatientGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
