import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Spotify - Web Player';

  constructor(private _router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('auth') === 'true') {
      this._router.navigateByUrl('/home');
    }
  }
}
