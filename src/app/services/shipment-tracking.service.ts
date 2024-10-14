import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Shipment } from '../interfaces/shipment-tracking.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentTrackingService {
  private shipments: Shipment[] = [];

  private dataUrl = '/assets/data/shipments.json';

  constructor(private http: HttpClient) { }

  getShipments(): Observable<Shipment[]> {
    if (this.shipments.length > 0) {
      return of(this.shipments); // Return cached shipments, its only for JSON data, not for API
    }
    return this.http.get<Shipment[]>(this.dataUrl).pipe(
      tap((data) => (this.shipments = data)) // Cache fetched shipments, its only for JSON data, not for API
    );
  }

  getShipmentById(id: string): Observable<Shipment | undefined> {
    if (this.shipments.length > 0) {
      // Return the shipment from the already cached shipments, its only for JSON data, not for API
      return of(this.shipments.find((s) => s.id === id));
    }
    // If the shipments are not loaded yet
    return this.getShipments().pipe(
      map((shipments) => shipments.find((s) => s.id === id))
    );
  }
}

