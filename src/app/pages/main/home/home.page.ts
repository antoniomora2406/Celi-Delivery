import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  estado: string = ''; // Estado inicial vacío

  ngOnInit() {
  }

//========Cerrar Sesión===========
  signOut(){
    this.firebaseSvc.signOut()
  }

  //===========agregar o actualizar producto=============
  addUpdateProduct(){
    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal'
    })
  }

  

  // Método para cambiar el estado del repartidor
  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
  }

}
