import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { Page404Component } from './page-404/page-404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClaimsComponent } from './claims/claims/claims.component';
import { ReportPaymenComponent } from './payments/reportPaymen/report-paymen/report-paymen.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments/payments.component';
import { InterceptorService } from './services/interceptor.service';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    PaymentsComponent,
    ClaimsComponent,
    ReportPaymenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
