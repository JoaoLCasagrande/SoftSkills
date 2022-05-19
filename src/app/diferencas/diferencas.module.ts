import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiferencasPageRoutingModule } from './diferencas-routing.module';

import { DiferencasPage } from './diferencas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiferencasPageRoutingModule
  ],
  declarations: [DiferencasPage]
})
export class DiferencasPageModule {}
