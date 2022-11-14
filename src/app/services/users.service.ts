import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/services/auth.service';
import { BrokerUser } from '../interfaces/users-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl =  environment.baseUrl
  constructor(private _http: HttpClient, private authService:AuthService) { }


  getUsers(){
    return this._http.get(`${this.apiUrl}/users`)
  }

  createUser(userMdoel:BrokerUser){

    if (this.authService.user.user_type == 7) {
      return this._http.post(`${this.apiUrl}/users/insurer`, userMdoel)
    }
    return this._http.post(`${this.apiUrl}/users/broker`, userMdoel)
  }

  updateUser(userMdoel:BrokerUser, userId:number){

    if (this.authService.user.user_type == 7) {
      return this._http.put(`${this.apiUrl}/users/insurer/${userId}`, userMdoel)
    }
    return this._http.put(`${this.apiUrl}/users/broker/${userId}`, userMdoel)
  }
  
}
