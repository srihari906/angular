import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentLang=localStorage.getItem("current-lng");
    const authReq = req.clone({
      headers: req.headers.set('Accept-Language', currentLang)
    });
    return next.handle(authReq)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      });
  }
  
}

