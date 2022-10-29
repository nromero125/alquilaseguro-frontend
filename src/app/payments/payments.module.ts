import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { SharedModule } from '../shared/shared.module';
import { ReportPaymenComponent } from './reportPaymen/report-paymen/report-paymen.component';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsComponent,
    ReportPaymenComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModule { }
