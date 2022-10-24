import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtyRoutingModule } from './realty-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RealtyRoutingModule,
    SharedModule
  ]
})
export class RealtyModule { }
