import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostraGanhoPageRoutingModule } from './mostra-ganho-routing.module';

import { MostraGanhoPage } from './mostra-ganho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostraGanhoPageRoutingModule
  ],
  declarations: [MostraGanhoPage]
})
export class MostraGanhoPageModule {}
