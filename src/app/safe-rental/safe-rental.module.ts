import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeRentalRoutingModule } from './safe-rental-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SafeRentalRoutingModule,
    SharedModule
  ]
})
export class SafeRentalModule { }
