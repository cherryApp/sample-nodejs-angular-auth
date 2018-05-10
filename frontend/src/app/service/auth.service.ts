import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  user: User;
  endPoint = 'http://localhost:3000/';
  sendHeaders: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });
  token = '';
  sessionCookieName = 'connect.sid';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {

  }

  getUser(): void {
    console.log('authkám');
    this.http.get(`${this.endPoint}users/profile`, this.httpOptions).forEach(
      value => {
        this.user = value as User;
      }
    ).catch( err => {
        this.user = null;
    });
  }

  doLogin(data): void {
    this.http.post(`${this.endPoint}users/login`, data, this.httpOptions).forEach(
      (res: any) => {
        if (res.sessionID) {
          this.token = `${this.sessionCookieName}=${res.sessionID}`;
        }
      }
    );
  }

}
