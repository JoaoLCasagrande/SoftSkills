import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiferencasPage } from './diferencas.page';

const routes: Routes = [
  {
    path: '',
    component: DiferencasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiferencasPageRoutingModule {}
