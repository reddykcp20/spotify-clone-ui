import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private _router: Router,
    private _authService: AuthServiceService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this._authService.GetUser(
        this.loginForm.value.email!,
        this.loginForm.value.password!
      )
    ) {
      this._router.navigateByUrl('/home');
      localStorage.setItem('auth', 'true');
    }
  }
}
