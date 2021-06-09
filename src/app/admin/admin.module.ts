import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { VerificationComponent } from './verification/verification.component';


@NgModule({
  declarations: [
    AdminSigninComponent,
    AdminSignupComponent,
    AdminDashboardComponent,
    VerificationComponent
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    CommonModule,
    BaseModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
