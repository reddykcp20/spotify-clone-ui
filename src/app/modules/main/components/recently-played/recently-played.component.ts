import { ApiServiceService } from 'src/app/services/apiService/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss'],
})
export class RecentlyPlayedComponent implements OnInit {
  recentTracks: any = [];

  constructor(private _apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getRecentlyPlayedUserTracks();
  }

  getRecentlyPlayedUserTracks() {
    this._apiService.getRecentlyPlayedUserPlaylist().subscribe((response) => {
      this.recentTracks.push(response);
      this.recentTracks = this.recentTracks[0].tracks.items.slice(0, 5);
    });
  }
}
