import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, InputComponent } from '@coditashq/ng-ada-components';
import { AuthService } from '../../common-services/auth/auth.service';
import { HttpService } from '../../common-services/http/http.service';
import { customEmailValidator } from './login-page.component.data';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ButtonComponent, InputComponent, FormsModule, ReactiveFormsModule],
  providers: [AuthService, HttpService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, customEmailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  authenticationFail: boolean = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  onLogin() {
    const email = this.loginForm.value.email?.toLocaleString();
    this.authService
      .authenticate(email, this.loginForm.value.password)
      .subscribe({
        next: (value) => {
          this.authService.loginSuccess(value.token);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status == 400) {
            this.authenticationFail = true;
          } else {
            this.authenticationFail = true; // when error popup for all error is added than replace this
          }
        },
      });
  }
}
