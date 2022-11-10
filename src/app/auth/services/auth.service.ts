import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponce, resetPasswordModel, UserAuth } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: any;

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    const url: string = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<AuthResponce>(url, body)
      .pipe(
        tap(resp => {
          if (resp.token !== undefined) {
            localStorage.setItem('token', resp.token);
            this._user = resp.user
            
          }
        }),
        map(resp => resp),
        catchError(err => of(err.error.message))
      )
  }



  tokenValidation(): Observable<boolean> {

    const url: string = `${this.baseUrl}/user`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token') || ''}`);

    return this.http.get(url, { headers })
      .pipe(
        map(resp => {
          this._user = resp
          document.getElementById('page-container')?.classList.add('sidebar-o')
          return true
        }),
        catchError(err => of(false))
      )
  }

  logout() {
    localStorage.removeItem('token');
    document.getElementById('page-container')?.classList.remove('sidebar-o')
  }

  sendResettingEmail(email:any){
    return this.http.post(`${this.baseUrl}/password/forgot-password`, email)
  }
  
  resetPassword(resetModel: resetPasswordModel){
    return this.http.post(`${this.baseUrl}/password/reset`, resetModel)
  }

}
