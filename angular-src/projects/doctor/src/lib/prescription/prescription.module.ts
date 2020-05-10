import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrescriptionDataService } from './services/prescription-data.service';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent, NavComponent, PrescriptionComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ],
  providers: [PrescriptionDataService]
})
export class PrescriptionModule { }
