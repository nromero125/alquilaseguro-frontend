import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsComponent } from './claims/claims.component';
import { SharedModule } from '../shared/shared.module';
import { StatusPipe } from '../pipes/status.pipe';


@NgModule({
  declarations: [
    ClaimsComponent,

  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    SharedModule,
  ]
})
export class ClaimsModule { }
