import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Properties } from '../interfaces/property-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {
  apiUrl =  environment.baseUrl
  constructor(private _http: HttpClient) { }


  getTenantProperties():Observable<any>{
    return this._http.get<any>(`${this.apiUrl}/broker/properties`)
  }

  getPropertiesDetails(idProperty:number):Observable<Properties>{
    return this._http.get<Properties>(`${this.apiUrl}/properties/${idProperty}`)
  }

}
