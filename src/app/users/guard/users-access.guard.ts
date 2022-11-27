import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersAccessGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
    private router: Router) {              
}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    switch (this.authService.user.id) {
      case 6:
        return true
      case 7:
        return true
      default:
        this.router.navigateByUrl('/user/home')
        return false
    }
  }
  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    switch (this.authService.user.id) {
      case 6:
        return true
      case 7:
        return true
      default:
        this.router.navigateByUrl('/user/home')
        return false
    }
  }
}
