import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    SharedModule
  ]
})
export class OwnersModule { }
