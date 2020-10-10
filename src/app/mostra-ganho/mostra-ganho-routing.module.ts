import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraGanhoPage } from './mostra-ganho.page';

const routes: Routes = [
  {
    path: '',
    component: MostraGanhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraGanhoPageRoutingModule {}
