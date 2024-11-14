import { Component } from '@angular/core';

@Component({
  selector: 'app-navegations',
  templateUrl: './navegations.page.html',
  styleUrls: ['./navegations.page.scss'],
})
export class NavegationsPage  {

   currentStep: number = 0; // Inicialmente en el paso 0 (empezar viaje)

  constructor() {}

  // Método para iniciar el viaje
  empezarViaje() {
    this.currentStep = 1; // Cambia el estado para mostrar el botón de "Recogido"
  }

  // Método para cambiar el estado del progreso
  cambiarEstado(estado: string) {
    if (estado === 'recogido' && this.currentStep === 1) {
      this.currentStep = 2; // Avanza al segundo punto (En camino)
    } else if (estado === 'camino' && this.currentStep === 2) {
      this.currentStep = 3; // Avanza al tercer punto (Entregar)
    } else if (estado === 'entregado' && this.currentStep === 3) {
      this.currentStep = 4; // Completa el proceso (Proceso completo)
    }
  }
}
