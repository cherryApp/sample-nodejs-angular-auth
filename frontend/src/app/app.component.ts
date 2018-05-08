import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loginData: User = new User();

  constructor(public aService: AuthService) {
    aService.getUser();
  }

  doLogin() {
    console.log('loginData', this.loginData);
    this.aService.doLogin(this.loginData);
  }
}
