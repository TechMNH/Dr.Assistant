import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1'
  },
  {
    path: 'page1',
    component: DoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
