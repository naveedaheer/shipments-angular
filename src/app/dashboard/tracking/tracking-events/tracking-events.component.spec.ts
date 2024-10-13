import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingEventsComponent } from './tracking-events.component';

describe('TrackingEventsComponent', () => {
  let component: TrackingEventsComponent;
  let fixture: ComponentFixture<TrackingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
