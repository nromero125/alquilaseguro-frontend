import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenValidatorGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
               private router : Router){

  }

  canActivate(): Observable<boolean> |  boolean {
    if(this.authService.user.id){
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
   
  }

  canLoad(): Observable<boolean > | boolean{
    if(this.authService.user.id){
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  
  }
}
 