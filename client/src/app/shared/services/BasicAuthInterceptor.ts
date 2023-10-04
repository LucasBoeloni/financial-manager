import {HttpParams, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RequestUtil} from "../utils/request.util";


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let params = RequestUtil.setStandardParams(!!request.params ? request.params : new HttpParams());

    request = request.clone({
      params: params
    });

    return next.handle(request);
  }
}
