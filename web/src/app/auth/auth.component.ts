import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AUTH_TYPE } from '../config/enum';
import { AppState } from '../store/app.state';
import { Register } from '../store/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  readonly AUTH_TYPE = AUTH_TYPE;
  type: string;

  loginForm: any = {
    email: '',
    password: '',
    remember: false
  };
  registerForm: any = {
    email: '',
    username: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.type = route.snapshot.url[0].path;
  }

  ngOnInit(): void {
  }

  login(): void {}

  register(): void {
    if (!this.registerForm.email || !this.registerForm.username || !this.registerForm.password) {
        return;
    }

    this.store.dispatch(new Register(this.registerForm));
  }

}
