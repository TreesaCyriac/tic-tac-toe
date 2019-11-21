import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppService } from './../../state/app.service';
import { User } from './../../model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() signUpCheck = new EventEmitter<boolean>();

  @ViewChild('f', { static: false })
  public form: NgForm;

  public user: User = new User();
  public success: boolean = false;
  public submitAttempt: boolean = false;

  constructor(
    private _appSvc: AppService
  ) { }

  ngOnInit() {
  }

  onReturn() {
    this.signUpCheck.emit(false);
    this._appSvc.dNewUser(this.user);
  }

  onSubmit() {
    if (this.form.form.valid) {
      this.success = true;
      this.submitAttempt = false;
    } else {
      this.success = false;
      this.submitAttempt = true;
    }
  }

}
