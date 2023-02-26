import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-romance-songs',
  templateUrl: './romance-songs.component.html',
  styleUrls: ['./romance-songs.component.scss'],
})
export class RomanceSongsComponent implements OnInit {
  romanceTracks: any = [];

  constructor(private _apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getRomanceUserTracks();
  }

  getRomanceUserTracks() {
    this._apiService.getRomanceUserPlaylist().subscribe((response) => {
      this.romanceTracks.push(response);
      this.romanceTracks = this.romanceTracks[0].tracks.items.slice(0, 5);
    });
  }
}
