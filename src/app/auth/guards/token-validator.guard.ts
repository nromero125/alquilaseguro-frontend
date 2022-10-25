import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenValidatorGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) {

  }


  canActivate(): Observable<boolean> | boolean {

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
