import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescricaoSoftPageRoutingModule } from './descricao-soft-routing.module';

import { DescricaoSoftPage } from './descricao-soft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescricaoSoftPageRoutingModule
  ],
  declarations: [DescricaoSoftPage]
})
export class DescricaoSoftPageModule {}
