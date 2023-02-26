import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FocusPlaylistComponent } from './components/focus-playlist/focus-playlist.component';
import { SpotifyPlaylistComponent } from './components/spotify-playlist/spotify-playlist.component';

@NgModule({
  declarations: [HomeComponent, TopNavComponent, FocusPlaylistComponent, SpotifyPlaylistComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class LandingModule {}
