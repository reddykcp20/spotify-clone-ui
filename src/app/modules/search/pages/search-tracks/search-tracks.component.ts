import { ApiServiceService } from 'src/app/services/apiService/api-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.scss'],
})
export class SearchTracksComponent implements OnInit, OnDestroy {
  searchText: string = '';
  tracks: any = [];
  artists: any = [];
  playlists: any = [];
  tracksSubscription!: Subscription;
  artistsSubscription!: Subscription;
  playlistsSubscription!: Subscription;

  constructor(private _apiService: ApiServiceService) {}

  ngOnInit(): void {}

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    if (this.searchText != '') this.getSearched(this.searchText);
    else {
      this.tracks = [];
      this.artists = [];
      this.playlists = [];
    }
  }

  getSearched(val: string) {
    let trackPromise = new Promise(async (resolve, reject) => {
      this.tracksSubscription = await this._apiService
        .getSearchedTracks(val)
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          },
        });
    });

    let artistPromise = new Promise(async (resolve, reject) => {
      this.artistsSubscription = await this._apiService
        .getSearchedArtists(val)
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          },
        });
    });

    let playlistPromise = new Promise(async (resolve, reject) => {
      this.playlistsSubscription = await this._apiService
        .getSearchedPlaylists(val)
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          },
        });
    });

    try {
      let result = Promise.all([trackPromise, artistPromise, playlistPromise]);
      result.then((data) => {
        console.log(data);
        this.tracks = [];
        this.artists = [];
        this.playlists = [];
        this.tracks = data[0];
        this.artists = data[1];
        this.playlists = data[2];
        this.playlists = this.playlists.slice(0, 5);
      });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    if (this.tracksSubscription) {
      this.tracksSubscription.unsubscribe();
    }
    if (this.artistsSubscription) {
      this.artistsSubscription.unsubscribe();
    }
    if (this.playlistsSubscription) {
      this.playlistsSubscription.unsubscribe();
    }
  }
}
