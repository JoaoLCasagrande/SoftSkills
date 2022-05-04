import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandadasPage } from './demandadas.page';

const routes: Routes = [
  {
    path: '',
    component: DemandadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandadasPageRoutingModule {}
