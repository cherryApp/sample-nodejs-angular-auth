import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  user: User;
  endPoint: string = 'http://localhost:3000/';
  sendHeaders: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });
  token: string = "";
  sessionCookieName: string = "connect.sid";

  constructor(private http: HttpClient) {

  }

  getUser(): void {
    console.log('authkám');
    this.http.get(this.endPoint).forEach(
      value => {
        this.user = value as User;
      }
    ).catch( err => {
        this.user = null;
    });
  }

  doLogin(data): void {
    this.http.post(this.endPoint+'users/login', data, {headers: this.sendHeaders}).forEach(
      (res: any) => {
        if (res.sessionID) {
          this.token = this.sessionCookieName+'='+res.sessionID;
        }
      }
    );
  }

}
