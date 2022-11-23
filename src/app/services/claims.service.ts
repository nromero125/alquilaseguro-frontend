import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Claims } from '../interfaces/claims-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  apiUrl = environment.baseUrl
  constructor(private _http: HttpClient) { }


  // getTenantClaims(): Observable<Claims> {
  //   return this._http.get<Claims>(`${this.apiUrl}/tenant/claims`)
  // }

  // getBrokerClaims(): Observable<Claims> {
  //   return this._http.get<Claims>(`${this.apiUrl}/broker/claims`)
  // }

  getClaims(userType: number) {

    switch (userType) {
      case 3:
        return this._http.get<Claims>(`${this.apiUrl}/owner/claims`)
      case 4:
        return this._http.get<Claims>(`${this.apiUrl}/tenant/claims`)
      case 5:
        return this._http.get<Claims>(`${this.apiUrl}/broker/claims`)
      default:
        return this._http.get<Claims>(`${this.apiUrl}/claims`)
    }

    return null
  }
  getDetails(claimId: number): Observable<Claims> {
    return this._http.get<Claims>(`${this.apiUrl}/claims/${claimId}`)
  }

  createClaim(claimModel: FormData) {
    return this._http.post(`${this.apiUrl}/claims`, claimModel)
  }

  updateClaim(claimModel: any, claimId: number) {

    return this._http.post(`${this.apiUrl}/claims/${claimId}`,claimModel)
  }


}


