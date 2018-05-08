import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let customReq = req.clone({
      headers: new HttpHeaders({
        'cookie': this.auth.token ? this.auth.token : ""
      })
    });
    return next
      .handle(customReq)
      .do(ev => {
        console.log(ev);
        if (ev instanceof HttpHeaderResponse) {
          console.log(ev);
        }
      } )
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
      console.error(error);
      return Observable.throw(error); // <= B
  }
}
