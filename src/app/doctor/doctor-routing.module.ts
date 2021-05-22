import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FireGuard } from '../utility/services/fire-guard.guard';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: DoctorComponent
  },
  {
    path: 'prescription',
    loadChildren: './prescription/prescription.module#PrescriptionModule',
    //canActivate: [FireGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
