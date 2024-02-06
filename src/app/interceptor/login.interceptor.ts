import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  newReq!: HttpRequest<any>;

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {7
    console.log("进入到拦截器.....")

    const token = localStorage.getItem('token');
    if(token){
      this.newReq = request.clone({
        setHeaders: {
          Authorization: 'Basic ' + token
        }
      });
    }

    console.log(next.handle(this.newReq))
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // 如果HTTP响应状态码为401（未授权），则重定向到登录页
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
      );
  }
}
