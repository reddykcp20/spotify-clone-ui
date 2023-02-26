import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor() {}

  getToken() {
    if (localStorage.getItem('auth') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
