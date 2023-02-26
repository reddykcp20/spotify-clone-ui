import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchTracksComponent } from './pages/search-tracks/search-tracks.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    SearchTracksComponent,
    TopNavComponent,
    CollectionsComponent,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
  ],
})
export class SearchModule {}
