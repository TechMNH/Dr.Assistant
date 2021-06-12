import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../base/error-page/error-page.component';
import { PatientGuard } from '../utility/services/fire-guard.guard';
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: PatientDashboardComponent,
    canActivate: [PatientGuard],
    children: [
      {
        path: 'consultation',
        component: ConsultationComponent
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
export class PatientsRoutingModule { }
