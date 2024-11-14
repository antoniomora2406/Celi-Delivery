import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage  {

  order: any;

  constructor() {}

  acceptOrder(order: any) {
    console.log('Pedido aceptado:', order);
  }

  selectedSegment: string = 'activos'; 
  onSegmentChanged(event: any) {
    console.log('Segment changed to', event.detail.value);
  }

}
