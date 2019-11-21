import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './../../state/app.service';
import { User } from './../../model';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public signUpCheck: boolean = false;
  public error: boolean = false;

  private _userData: Array<User> = [];
  private _userExist: boolean = false;

  constructor(
    private _router: Router,
    private _appSvc: AppService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.clearAuthToken();
    this._appSvc.sGetNewUser().subscribe(data => {
      this._userData = data;
    });
  }

  onLogin() {
    this.error = false;
    this._authService.setAuthToken("token_1234");
    this._userData.forEach((user: User) => {
      if(!this._userExist) {
        if ((user.userName === this.user.userName) && (user.password1 === this.user.password1)) {
          this._userExist = true;
        } else {
          this.error = true;
          this._userExist = false;
        }
      }
    });
    
    this._userExist ? this._router.navigate(['/game']) : this.user.password1 = '';
  }

  onSignUp() {
    this.user = new User();
    this.error = false;
    this.signUpCheck = true;
  }

  signUpCheckEmitted(pEvent: boolean) {
    this.signUpCheck = pEvent;
  }

}
