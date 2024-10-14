import { Component, Input } from '@angular/core';
import { TrackingEvent } from '../../../interfaces/shipment-tracking.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracking-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking-events.component.html',
  styleUrl: './tracking-events.component.scss'
})
export class TrackingEventsComponent {
@Input() trackingEvents: TrackingEvent[] | undefined = [];
}
