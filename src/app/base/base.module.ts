import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BaseRoutingModule } from './base-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    MedicineComponent,
    DashboardComponent,
    SigninComponent,
    ProfileComponent,
    UpdateProfileComponent,
    PaymentComponent,
    ContactUsComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    SignupComponent,
    MedicineComponent,
    ProfileComponent,
    UpdateProfileComponent,
    PaymentComponent,
    LoaderComponent,
    ErrorMessageComponent
  ]
})
export class BaseModule { }
