import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponce, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user(){

  let user = JSON.parse(localStorage.getItem('user')!);
  
  this._user = user

    return {...this._user};
  }
 
  constructor( private http: HttpClient) { }

  login(email:string, password: string){

    const url: string = `${this.baseUrl}/auth/login`;
    const body = {email, password};

    return this.http.post<AuthResponce>( url , body )
            .pipe(
              map(resp =>{
                if(resp.hasOwnProperty('token')){
                  localStorage.setItem('user', JSON.stringify(resp.user));
                    this._user = resp.user  
                }
              })
            )
}

  logout(){
  localStorage.removeItem('user');
}

}
