import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FireGuard } from './utility/services/fire-guard.guard';

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
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [FireGuard]
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule),
    canActivate: [FireGuard]
  },
  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule),
    canActivate: [FireGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'utility',
    loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
