import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TokenValidatorGuard } from './auth/guards/token-validator.guard';
import { HomeComponent } from './home/page/home/home.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'owners',
    loadChildren: ()=> import('./owners/owners.module').then(m => m.OwnersModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  },
   {
    path:'payments',
    loadChildren: ()=> import('./payments/payments.module').then(m => m.PaymentsModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  },
   {
    path:'claims',
    loadChildren: ()=> import('./claims/claims.module').then(m => m.ClaimsModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  },
   {
    path:'users',
    loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
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
