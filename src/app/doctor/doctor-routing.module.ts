import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../base/error-page/error-page.component';
import { DoctorGuard } from '../utility/services/fire-guard.guard';
import { CheckUpComponent } from './check-up/check-up.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DoctorDashboardComponent,
    canActivate: [DoctorGuard],
    children: [
      {
        path: 'check-up',
        component: CheckUpComponent
      }
    ]
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
