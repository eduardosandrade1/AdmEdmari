import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraCarrosPage } from './mostra-carros.page';

const routes: Routes = [
  {
    path: '',
    component: MostraCarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraCarrosPageRoutingModule {}
