import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('admin').then(m => m.AdminModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('doctor').then(m => m.DoctorModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('patients').then(m => m.PatientsModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('signup').then(m => m.SignupModule)
  },
  {
    path: 'utility',
    loadChildren: () => import('utility').then(m => m.UtilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }