import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Menu{
  code : string,
  name : string
}

@Injectable({
  providedIn: 'root'
})


export class MenuService {

constructor(private http: HttpClient) { }


getMenus() : Observable<string>{
  const url = environment.endPoint + '/menu';
  return this.http.get<string>(url);
}

}


