import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  apiUrl = environment.baseUrl
  constructor(private _http: HttpClient) { }

  getProperties() {
    return this._http.get(`${this.apiUrl}/properties`)
  }

}
