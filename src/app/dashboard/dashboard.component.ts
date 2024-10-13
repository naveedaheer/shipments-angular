import { Component } from '@angular/core';
import { ShipmentsComponent } from './shipments/shipments.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ShipmentsComponent, RouterOutlet, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
