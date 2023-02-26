import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/authGuardService/auth-guard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _auth: AuthGuardService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._auth.getToken()) {
      this._router.navigateByUrl('/');
    }
    return this._auth.getToken();
  }
}
