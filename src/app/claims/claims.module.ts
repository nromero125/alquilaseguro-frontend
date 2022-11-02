import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsComponent } from './claims/claims.component';
import { SharedModule } from '../shared/shared.module';
import { StatusPipe } from '../pipes/status.pipe';
import { ClamisDetailsComponent } from './clamis-details/clamis-details.component';
import { CreateClaimModalComponent } from './create-claim-modal/create-claim-modal.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClaimsComponent,
    ClamisDetailsComponent,
    CreateClaimModalComponent,

  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    SharedModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ]
})
export class ClaimsModule { }
