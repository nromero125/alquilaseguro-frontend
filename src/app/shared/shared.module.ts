import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ToastrModule } from 'ngx-toastr';
import { StatusPipe } from '../pipes/status.pipe';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    SidebarComponent,
    PaginatorComponent,
    StatusPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    SharedRoutingModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    LayoutComponent,
    MatPaginatorModule,
    PaginatorComponent,
    StatusPipe
  ]
})
export class SharedModule { }
