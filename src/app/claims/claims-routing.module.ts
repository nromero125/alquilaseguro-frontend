import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { ClaimsComponent } from './claims/claims.component';
import { ClamisDetailsComponent } from './clamis-details/clamis-details.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'list',
        component:ClaimsComponent
      },
      {
        path:'details/:id',
        component:ClamisDetailsComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
