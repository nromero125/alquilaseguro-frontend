import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Claims } from '../interfaces/claims-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  apiUrl =  environment.baseUrl
  constructor(private _http: HttpClient) { }


  getTenantClaims():Observable<Claims>{
    return this._http.get<Claims>(`${this.apiUrl}/tenant/claims`)
  }

  getDetails(claimId:number):Observable<Claims>{
    return this._http.get<Claims>(`${this.apiUrl}/claims/${claimId}`)
  }

  createClaim(claimModel:FormData){
    return this._http.post(`${this.apiUrl}/claims`,claimModel)
  }


}


