import { Component } from '@angular/core';
import { ShipmentsComponent } from './shipments/shipments.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ShipmentsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
