import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'realty',
    loadChildren: ()=> import('./realty/realty.module').then(m => m.RealtyModule)
  },
  {
    path:'renters',
    loadChildren: ()=> import('./renters/renters.module').then(m => m.RentersModule)
  }, 
  {
    path:'owners',
    loadChildren: ()=> import('./owners/owners.module').then(m => m.OwnersModule)
  },
   {
    path:'safe-rental',
    loadChildren: ()=> import('./safe-rental/safe-rental.module').then(m => m.SafeRentalModule)
  },
  {
    path:'page-404',
    component:Page404Component
  }, 
  {
    path:'**',
    redirectTo:'page-404'
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
