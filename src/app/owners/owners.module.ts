import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OwnersComponent } from './owners/owners.component';
import { PropertiesDetailsComponent } from './properties-details/properties-details.component';




@NgModule({
  declarations: [
    OwnersComponent,
    PropertiesDetailsComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    SharedModule,

  ]
})
export class OwnersModule { }
