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
import { StatusPipe } from '../pipes/status.pipe';
import { PaymentStatusPipe } from '../pipes/payment-status.pipe';
import { ErrorsComponent } from './errors/errors.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './header/change-password/change-password.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    SidebarComponent,
    PaginatorComponent,
    StatusPipe,
    PaymentStatusPipe,
    ErrorsComponent,
    ChangePasswordComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    SharedRoutingModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent,
    MatPaginatorModule,
    PaginatorComponent,
    StatusPipe,
    PaymentStatusPipe,
    ErrorsComponent
  ]
})
export class SharedModule { }
