import { Component } from '@angular/core';
import { TrackingStatusStepBarComponent } from "./tracking-status-step-bar/tracking-status-step-bar.component";
import { TrackingEventsComponent } from "./tracking-events/tracking-events.component";

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [TrackingStatusStepBarComponent, TrackingEventsComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss'
})
export class TrackingComponent {

}
