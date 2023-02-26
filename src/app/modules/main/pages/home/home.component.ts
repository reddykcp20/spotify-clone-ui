import { ApiServiceService } from 'src/app/services/apiService/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // data: any = [];
  // recentlyPlayed: any = [];
  playlists: any = [];

  constructor(private _apiService: ApiServiceService) {}

  ngOnInit(): void {
    // this.getRecentlyPlayedTracks();
    this.getUserPlaylist();
  }

  // getRecentlyPlayedTracks() {
  //   this._apiService.getRecentlyPlayed().subscribe((response) => {
  //     this.data.push(response);
  //     console.log('data', response);
  //   });
  // }

  getUserPlaylist() {
    this._apiService.getUserPlaylist().subscribe((response) => {
      this.playlists.push(response);
      this.playlists = this.playlists[0].reverse();
      // console.log(this.playlists);
    });
  }
}
