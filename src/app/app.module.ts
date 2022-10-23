import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { Page404Component } from './page-404/page-404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsComponent } from './payments/payments/payments.component';
import { ClaimsComponent } from './claims/claims/claims.component';
import { ReportPaymenComponent } from './payments/reportPaymen/report-paymen/report-paymen.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
