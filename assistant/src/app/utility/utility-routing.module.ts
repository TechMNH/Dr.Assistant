import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilityComponent } from './utility.component';
import { FireGuard } from './services/fire-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: UtilityComponent
  },
  {
    path: 'dash',
    component: UtilityComponent,
    canActivate: [FireGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
