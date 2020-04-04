import { NgModule } from '@angular/core';
import { UtilityComponent } from './utility.component';
import { UtilityRoutingModule } from './utility-routing.module';



@NgModule({
  declarations: [UtilityComponent],
  imports: [
    UtilityRoutingModule
  ],
  exports: [UtilityComponent]
})
export class UtilityModule { }
