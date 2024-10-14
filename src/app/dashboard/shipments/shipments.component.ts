import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentTrackingService } from '../../services/shipment-tracking.service';
import { Shipment } from '../../interfaces/shipment-tracking.interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.scss',
  providers: [ShipmentTrackingService]
})
export class ShipmentsComponent {
  shipments: Shipment[] = [];
  filteredShipments: Shipment[] = [];

  constructor(private router: Router, private shipmentTrackingService: ShipmentTrackingService) { }

  ngOnInit(): void {
    this.fetchShipments();
  }

  fetchShipments(): void {
    this.shipmentTrackingService.getShipments().subscribe(shipments => {
      this.filteredShipments = shipments.map(item => ({
        ...item,
        manifestedDate: this.parseDate(item.manifestedDate || ''),
      }));
      this.shipments = [...this.filteredShipments];
    });
  }

  searchShipments(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    if (!value) {
      this.filteredShipments = this.shipments;
      return;
    }

    this.filteredShipments = this.shipments.filter(shipment =>
      shipment.trackingNumber.includes(value) ||
      shipment.trackingStatus.toLowerCase().includes(value) ||
      shipment.carrierProfile.toLowerCase().includes(value) ||
      shipment?.destinationAddress?.company.toLowerCase().includes(value)
    );
  }

  trackingDetailView(id: string): void {
    this.router.navigate([`/dashboard/tracking/${id}`]);
  }

  parseDate(dateStr: string): string | null {
    const parsedDate = new Date(dateStr);
    return isNaN(parsedDate.getTime()) ? null : dateStr;
  }

}
