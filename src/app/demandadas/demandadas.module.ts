import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandadasPageRoutingModule } from './demandadas-routing.module';

import { DemandadasPage } from './demandadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandadasPageRoutingModule
  ],
  declarations: [DemandadasPage]
})
export class DemandadasPageModule {}
