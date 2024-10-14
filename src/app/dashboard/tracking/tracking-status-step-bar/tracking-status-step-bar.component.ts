import { Component, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-tracking-status-step-bar',
  standalone: true,
  imports: [MatStepperModule, MatIconModule],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  templateUrl: './tracking-status-step-bar.component.html',
  styleUrl: './tracking-status-step-bar.component.scss',
})
export class TrackingStatusStepBarComponent {
  @Input() currentStatus!: string | undefined;
  trackingStatusList: string[] = [
    'Documentation Prepared',
    'Booking Arranged',
    'Receipt of Goods',
    'In Transit',
    'Arrived at Destination',
    'Out for Delivery',
    'Delivered',
  ];

  isCompleted(index: number): boolean {
    const currentIndex = this.trackingStatusList.findIndex((status: string) =>
      this.normalizeStatus(status) === this.normalizeStatus(this.currentStatus || '')
    );
    return currentIndex !== -1 && index < currentIndex;
  }

  normalizeStatus(status: string): string {
    // Remove spaces from start, end, and middle
    return status.replace(/\s+/g, '').toLowerCase();
  }

}
