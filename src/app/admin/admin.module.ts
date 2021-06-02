import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminSigninComponent, AdminSignupComponent, AdminDashboardComponent],
  imports: [
    AdminRoutingModule,
    FormsModule
  ],
  exports: [AdminSigninComponent, AdminSignupComponent]
})
export class AdminModule { }
