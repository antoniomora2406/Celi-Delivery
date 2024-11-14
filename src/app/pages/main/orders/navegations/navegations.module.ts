import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegationsPageRoutingModule } from './navegations-routing.module';

import { NavegationsPage } from './navegations.page';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegationsPageRoutingModule,
    SharedModule,
    GoogleMapsModule,
    NgCircleProgressModule.forRoot({
      
    })
  ],
  declarations: [NavegationsPage]
})
export class NavegationsPageModule {}
