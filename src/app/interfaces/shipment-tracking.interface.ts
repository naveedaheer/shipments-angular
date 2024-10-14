export interface Location {
  id: number;
  name: string;
  code: string;
  latitude: number;
  longitude: number;
  zoneId: number | null;
  country: Country;
  state: State;
}

export interface Country {
  name: string;
  code: string;
}

export interface State {
  name: string;
  code: string;
}

export interface Address {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  company: string;
  addressLine1: string;
  addressLine2: string | null;
  location: Location;
}

export interface TrackingEvent {
  location: string;
  status: string;
  timestamp: string;
}

export interface Shipment {
  currency: string;
  destinationAddress: Address;
  amount: number;
  sourceAddress: Address;
  shipmentId: string;
  carrierProfile: string;
  serviceProfile: string;
  carrier: string;
  trackingNumber: string;
  trackingStatus: string;
  bookingStatus: string;
  manifestedDate: string | null;
  id: string;
  trackingEvents: TrackingEvent[];
}
