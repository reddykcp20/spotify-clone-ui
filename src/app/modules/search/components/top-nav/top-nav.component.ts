import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  searchValue: string = '';
  profileData: any;
  name!: string;
  constructor(
    private _router: Router,
    private _apiService: ApiServiceService
  ) {}

  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit(): void {
    this.getUserDetails();
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchValue);
  }

  getUserDetails() {
    this._apiService.getMe().subscribe((response) => {
      this.profileData = response;
      this.name = this.profileData.display_name;
    });
  }

  onLogout() {
    localStorage.removeItem('auth');
    this._router.navigateByUrl('');
  }
}
