import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  apiUrl = environment.baseUrl
  constructor(private _http: HttpClient) { }

  getTenantPayments() {
    return this._http.get(`${this.apiUrl}/tenant/payments`)
  }

  getInsurerPayments() {
    return this._http.get(`${this.apiUrl}/insurance/payments`)
  }

  getPayments(userType: number) {
    switch (userType) {
      case 3:
        return this._http.get(`${this.apiUrl}/owner/payments`);
      case 4:
        return this._http.get(`${this.apiUrl}/tenant/payments`);
      case 5:
        return this._http.get(`${this.apiUrl}/broker/payments`);
      case 7:
        return this._http.get(`${this.apiUrl}/insurance/payments`);
      default:
        break;
    }

    return null
  }

  createPayment(payment: any) {
    return this._http.post(`${this.apiUrl}/tenant/payments/create`, payment)
  }



}
