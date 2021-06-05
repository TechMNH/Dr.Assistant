import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BaseRoutingModule } from './base-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [HomeComponent, SignupComponent, MedicineComponent, DashboardComponent, SigninComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    FormsModule
  ],
  exports: [HomeComponent, SignupComponent, MedicineComponent]
})
export class BaseModule { }
