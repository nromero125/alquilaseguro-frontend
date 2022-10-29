import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = localStorage.getItem('token')

    req = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });

    return next.handle(req).pipe(
      finalize(() => {
      }
      )
    )
  }
}

