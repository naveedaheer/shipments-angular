import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/shipments/shipments.component').then(m => m.ShipmentsComponent)
      },
      {
        path: 'tracking/:id',
        loadComponent: () => import('./dashboard/tracking/tracking.component').then(m => m.TrackingComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
