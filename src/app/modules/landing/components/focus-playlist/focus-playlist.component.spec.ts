import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPlaylistComponent } from './focus-playlist.component';

describe('FocusPlaylistComponent', () => {
  let component: FocusPlaylistComponent;
  let fixture: ComponentFixture<FocusPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
