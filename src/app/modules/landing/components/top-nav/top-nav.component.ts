import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onLogIn() {
    this._router.navigateByUrl('/login');
  }
}
