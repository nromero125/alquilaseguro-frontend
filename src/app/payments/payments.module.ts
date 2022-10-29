import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { ReportPaymenComponent } from './reportPaymen/report-paymen/report-paymen.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PaymentsComponent,
    ReportPaymenComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
