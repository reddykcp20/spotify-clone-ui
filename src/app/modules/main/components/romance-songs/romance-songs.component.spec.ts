import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceSongsComponent } from './romance-songs.component';

describe('RomanceSongsComponent', () => {
  let component: RomanceSongsComponent;
  let fixture: ComponentFixture<RomanceSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanceSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanceSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
