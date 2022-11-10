import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrokerUser } from '../interfaces/users-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl =  environment.baseUrl
  constructor(private _http: HttpClient) { }


  getUsers(){
    return this._http.get(`${this.apiUrl}/users`)
  }

  createUser(userMdoel:BrokerUser){
    return this._http.post(`${this.apiUrl}/users/broker`, userMdoel)
  }
  
}
