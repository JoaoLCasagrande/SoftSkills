import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportanciaPageRoutingModule } from './importancia-routing.module';

import { ImportanciaPage } from './importancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportanciaPageRoutingModule
  ],
  declarations: [ImportanciaPage]
})
export class ImportanciaPageModule {}
