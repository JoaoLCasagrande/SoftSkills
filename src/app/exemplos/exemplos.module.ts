import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExemplosPageRoutingModule } from './exemplos-routing.module';

import { ExemplosPage } from './exemplos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExemplosPageRoutingModule
  ],
  declarations: [ExemplosPage]
})
export class ExemplosPageModule {}
