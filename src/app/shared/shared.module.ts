import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';


import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    SharedRoutingModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class SharedModule { }
