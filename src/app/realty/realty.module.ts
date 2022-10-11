import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtyRoutingModule } from './realty-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PruebaComponent } from './prueba/prueba.component';


@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule,
    RealtyRoutingModule,
    SharedModule
  ]
})
export class RealtyModule { }
