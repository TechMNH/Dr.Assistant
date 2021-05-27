import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CommonRoutingModule } from './common-routing.module';



@NgModule({
  declarations: [HomeComponent, SignupComponent, MedicineComponent],
  imports: [
    AngularCommonModule,
    CommonRoutingModule
  ],
  exports: [HomeComponent, SignupComponent, MedicineComponent]
})
export class CommonModule { }
