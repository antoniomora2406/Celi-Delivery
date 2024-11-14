import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  order: any

  pedido = {
    id: 1234,
    cliente: {
      nombre: 'Juan Pérez',
      telefono: '+123456789',
      direccion: 'Calle Falsa 123, Ciudad',
    },
    estado: 'En camino',
    notas: 'El cliente pidió que llamaras al llegar',
    horaEntrega: '14:30',
  };

  constructor() { }

  ngOnInit() {
  }

}
