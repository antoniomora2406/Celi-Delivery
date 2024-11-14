import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  historialPedidos = [
    {
      id: 1234,
      cliente: {
        nombre: 'Juan Pérez',
        direccion: 'Calle Falsa 123, Ciudad'
      },
      estado: 'Completado',
      fechaEntrega: '2024-10-01 14:30',
      total: 150,
      notas: 'Sin incidencias'
    },
    {
      id: 5678,
      cliente: {
        nombre: 'Ana López',
        direccion: 'Avenida Siempre Viva 742, Ciudad'
      },
      estado: 'Completado',
      fechaEntrega: '2024-10-02 15:00',
      total: 200,
      notas: 'Entregar rápido'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
