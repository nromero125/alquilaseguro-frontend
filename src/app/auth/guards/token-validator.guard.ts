import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, NavigationEnd, Route, Router } from '@angular/router';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class TokenValidatorGuard implements CanActivate, CanLoad {
  curentUser!: any;
  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {              
  }
  public subscriber!: Subscription;

  canActivate(): Observable<boolean> | boolean {
    return this.authService.tokenValidation()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth');
            document.getElementById('page-container')?.classList.remove('sidebar-o')
          }else{
           /*  this.curentUser = this.authService.user;
            this.subscriber = this.router.events.pipe(
              filter((event:any) => event instanceof NavigationEnd)
            ).subscribe((event) => {
               if(this.curentUser.id === 2){
                if(event['url'] === '/owners/list' || event['url'] === '/payments/list' || event['url'] === '/users/list'){
                 this.restrictedAccess();
                }
              }
              if(this.curentUser.id === 3){
                if(event['url'] === '/users/list'){
                 this.restrictedAccess();
                }
              }
              if(this.curentUser.id === 4){
                if(event['url'] === '/owners/list' || event['url'] === '/users/list'){
                 this.restrictedAccess();
                }
              }
              if(this.curentUser.id === 5){
                if(event['url'] === '/users/list'  || event['url'] === '/claims/list'){
                 this.restrictedAccess();
                }
              }
              if(this.curentUser.id === 6){
                if( event['url'] === '/payments/list' || event['url'] === '/claims/list'){
                 this.restrictedAccess();
                }
              }
              if(this.curentUser.id === 7){
                if(event['url'] === '/owners/list'){
                 this.restrictedAccess();
                }
              }
               
               this.subscriber?.unsubscribe();
            }); */
          }
        })
      )
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.tokenValidation()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth');
            document.getElementById('page-container')?.classList.remove('sidebar-o')
          }
        })
      )

  }

}
