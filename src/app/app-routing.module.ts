import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';
import { TokenValidatorGuard } from './auth/guards/token-validator.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'realty',
    loadChildren: ()=> import('./realty/realty.module').then(m => m.RealtyModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  },
  {
    path:'renters',
    loadChildren: ()=> import('./renters/renters.module').then(m => m.RentersModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  }, 
  {
    path:'owners',
    loadChildren: ()=> import('./owners/owners.module').then(m => m.OwnersModule),
    canActivate: [TokenValidatorGuard],
    canLoad: [TokenValidatorGuard]
  },
   {
    path:'safe-rental',
    loadChildren: ()=> import('./safe-rental/safe-rental.module').then(m => m.SafeRentalModule),
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
    path:'page-404',
    component:Page404Component
  }, 
  {
    path:'**',
    redirectTo:'auth'
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
