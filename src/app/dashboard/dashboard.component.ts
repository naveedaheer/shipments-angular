import { Component } from '@angular/core';
import { ShipmentsComponent } from './shipments/shipments.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '../core/components/sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ShipmentsComponent, RouterOutlet, HeaderComponent, MatSidenavModule, SidenavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
