import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTracksComponent } from './pages/search-tracks/search-tracks.component';

const routes: Routes = [
  {
    path: '',
    component: SearchTracksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
