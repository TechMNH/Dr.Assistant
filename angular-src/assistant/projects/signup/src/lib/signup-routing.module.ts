import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1'
  },
  {
    path: 'page1',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
