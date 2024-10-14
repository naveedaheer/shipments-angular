import { Component } from '@angular/core';
import { TrackingStatusStepBarComponent } from "./tracking-status-step-bar/tracking-status-step-bar.component";
import { TrackingEventsComponent } from "./tracking-events/tracking-events.component";
import { Shipment } from '../../interfaces/shipment-tracking.interface';
import { ActivatedRoute } from '@angular/router';
import { ShipmentTrackingService } from '../../services/shipment-tracking.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [TrackingStatusStepBarComponent, TrackingEventsComponent, HttpClientModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss',
  providers: [ShipmentTrackingService]
})
export class TrackingComponent {
  shipment: Shipment | null = null;

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentTrackingService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchShipmentById(id);
    }
  }

  fetchShipmentById(id: string): void {
    this.shipmentService.getShipmentById(id).subscribe((data: any) => {
      this.shipment = data;
    });
  }
}
