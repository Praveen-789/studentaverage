import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymarksComponent } from './displaymarks.component';

describe('DisplaymarksComponent', () => {
  let component: DisplaymarksComponent;
  let fixture: ComponentFixture<DisplaymarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaymarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
