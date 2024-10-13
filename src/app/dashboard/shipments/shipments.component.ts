import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.scss'
})
export class ShipmentsComponent {

  constructor(private router: Router) { }

  detailView(): void {
    this.router.navigate(['/tracking']);
  }
}
