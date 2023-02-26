import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}

  getMe = () => {
    return this._http.get('/api/profile');
  };

  getRecentlyPlayed = () => {
    return this._http.get('/api/recentlyplayedtracks');
  };

  getUserPlaylist = () => {
    return this._http.get('/api/userplaylist');
  };

  getRecentlyPlayedUserPlaylist = () => {
    return this._http.get(`/api/playlist/4am2eLf1KctBA3J1exfxY5`);
  };

  getMassUserPlaylist = () => {
    return this._http.get(`/api/playlist/3fDXwrypBPTwGUPVX5ZggG`);
  };

  getRomanceUserPlaylist = () => {
    return this._http.get(`/api/playlist/0bSUr15WZ27AKUqbFGdu3F`);
  };

  getSearchedTracks = (data: string) => {
    return this._http.get('/api/searchtracks/' + data + '');
  };

  getSearchedArtists = (data: string) => {
    return this._http.get('/api/searchartists/' + data + '');
  };

  getSearchedPlaylists = (data: string) => {
    return this._http.get('/api/searchplaylists/' + data + '');
  };
}
