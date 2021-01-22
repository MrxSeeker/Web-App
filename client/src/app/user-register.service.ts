import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  public static registerHost = 'http://localhost:3000/';
  //static registerHost: string;
  //http: HttpClient;

  constructor(private http: HttpClient) {
    //UserRegisterService.registerHost= "http://localhost:3000";
  }

  register(user: User): Observable<User> {
    const headers = new HttpHeaders();
    return this.http.post<User>(UserRegisterService.registerHost + 'users', user, { headers }).pipe(
      map(user => { return user; })
    );
  }
}
