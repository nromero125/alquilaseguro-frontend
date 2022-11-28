import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TokenValidatorGuard } from './auth/guards/token-validator.guard';
import { HomeComponent } from './home/page/home/home.component';
import { ClaimsAccessGuard } from './claims/guard/claims-access.guard';
import { OwnerAccessGuard } from './owners/guard/owner-access.guard';
import { PaymentsAccessGuard } from './payments/guard/payments-access.guard';
import { UsersAccessGuard } from './users/guard/users-access.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'owners',
    loadChildren: ()=> import('./owners/owners.module').then(m => m.OwnersModule),
    canActivate: [TokenValidatorGuard, OwnerAccessGuard],
    canLoad: [TokenValidatorGuard, OwnerAccessGuard]
  },
   {
    path:'payments',
    loadChildren: ()=> import('./payments/payments.module').then(m => m.PaymentsModule),
    canActivate: [TokenValidatorGuard, PaymentsAccessGuard],
    canLoad: [TokenValidatorGuard, PaymentsAccessGuard]
  },
   {
    path:'claims',
    loadChildren: ()=> import('./claims/claims.module').then(m => m.ClaimsModule),
    canActivate: [TokenValidatorGuard, ClaimsAccessGuard],
    canLoad: [TokenValidatorGuard, ClaimsAccessGuard]
  },
   {
    path:'users',
    loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule),
    canActivate: [TokenValidatorGuard, UsersAccessGuard],
    canLoad: [TokenValidatorGuard, UsersAccessGuard],
  },
  {
    path:'user',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  },
  {
    path:'**',
    redirectTo:'user'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
