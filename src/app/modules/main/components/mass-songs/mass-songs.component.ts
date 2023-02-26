import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-mass-songs',
  templateUrl: './mass-songs.component.html',
  styleUrls: ['./mass-songs.component.scss'],
})
export class MassSongsComponent implements OnInit {
  massTracks: any = [];

  constructor(private _apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getMassUserTracks();
  }

  getMassUserTracks() {
    this._apiService.getMassUserPlaylist().subscribe((response) => {
      this.massTracks.push(response);
      this.massTracks = this.massTracks[0].tracks.items.slice(0, 5);
    });
  }
}
