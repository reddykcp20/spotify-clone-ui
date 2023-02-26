import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassSongsComponent } from './mass-songs.component';

describe('MassSongsComponent', () => {
  let component: MassSongsComponent;
  let fixture: ComponentFixture<MassSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
