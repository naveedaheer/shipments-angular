import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'tracking',
    component: TrackingComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];
