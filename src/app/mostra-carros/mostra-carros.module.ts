import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostraCarrosPageRoutingModule } from './mostra-carros-routing.module';

import { MostraCarrosPage } from './mostra-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostraCarrosPageRoutingModule
  ],
  declarations: [MostraCarrosPage]
})
export class MostraCarrosPageModule {}
