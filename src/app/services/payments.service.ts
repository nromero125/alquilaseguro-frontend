import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  apiUrl =  environment.baseUrl
  constructor(private _http: HttpClient ) { }

  getTenantPayments(){
    return this._http.get(`${this.apiUrl}/tenant/payments`)
  }


}
