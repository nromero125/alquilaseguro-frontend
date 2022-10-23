import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentersRoutingModule } from './renters-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RentersComponent } from './renters/renters.component';


@NgModule({
  declarations: [
    RentersComponent
  ],
  imports: [
    CommonModule,
    RentersRoutingModule,
    SharedModule
  ]
})
export class RentersModule { }
