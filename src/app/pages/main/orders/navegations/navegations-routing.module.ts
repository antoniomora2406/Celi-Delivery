import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegationsPage } from './navegations.page';

const routes: Routes = [
  {
    path: '',
    component: NavegationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegationsPageRoutingModule {}
