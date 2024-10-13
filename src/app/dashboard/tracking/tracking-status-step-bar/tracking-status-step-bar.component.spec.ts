import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingStatusStepBarComponent } from './tracking-status-step-bar.component';

describe('TrackingStatusStepBarComponent', () => {
  let component: TrackingStatusStepBarComponent;
  let fixture: ComponentFixture<TrackingStatusStepBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingStatusStepBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingStatusStepBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
