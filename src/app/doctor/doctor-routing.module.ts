import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../common/error-page/error-page.component';
import { DoctorGuard } from '../utility/services/fire-guard.guard';
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
    component: DoctorDashboardComponent,
    canActivate: [DoctorGuard]
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
export class DoctorRoutingModule { }
