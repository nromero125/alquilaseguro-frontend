import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, delay, tap } from 'rxjs/operators';
import { SpinerService } from './spiner.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( private spinnerService: SpinerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = localStorage.getItem('token')
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });

    this.spinnerService.callSpiner();
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.stopSpiner())
    );
  }
}

