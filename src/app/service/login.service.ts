import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginRes } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }


login(data: any): Observable<LoginRes>{
  // console.log(environment.endPoint + '/login')
  var url = environment.endPoint + '/login'
  return this.http.post<LoginRes>(url,data)
  }
}


