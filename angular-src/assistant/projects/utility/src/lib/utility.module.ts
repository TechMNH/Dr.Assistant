import { NgModule } from '@angular/core';
import { UtilityComponent } from './utility.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [UtilityComponent],
  imports: [
    UtilityRoutingModule
  ],
  providers: [AuthenticationService],
  exports: [UtilityComponent]
})
export class UtilityModule { }
