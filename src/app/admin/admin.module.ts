import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { VerificationComponent } from './verification/verification.component';


@NgModule({
  declarations: [
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
