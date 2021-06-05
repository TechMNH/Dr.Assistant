import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from '../utility/services/fire-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'guest',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin'
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [GuestGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
