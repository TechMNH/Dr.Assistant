import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../base/error-page/error-page.component';
import { MedicineComponent } from '../base/medicine/medicine.component';
import { PaymentComponent } from '../base/payment/payment.component';
import { ProfileComponent } from '../base/profile/profile.component';
import { UpdateProfileComponent } from '../base/update-profile/update-profile.component';
import { AdminGuard } from '../utility/services/fire-guard.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'verification',
        component: VerificationComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'update-profile',
        component: UpdateProfileComponent
      },
      {
        path: 'medicine',
        component: MedicineComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
