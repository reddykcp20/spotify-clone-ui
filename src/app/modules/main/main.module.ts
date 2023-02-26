import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { MassSongsComponent } from './components/mass-songs/mass-songs.component';
import { RomanceSongsComponent } from './components/romance-songs/romance-songs.component';
import { StringReplacePipe } from './pipes/string-replace.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    HomeComponent,
    TopNavComponent,
    RecentlyPlayedComponent,
    MassSongsComponent,
    RomanceSongsComponent,
    StringReplacePipe,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatChipsModule,
  ],
})
export class MainModule {}
