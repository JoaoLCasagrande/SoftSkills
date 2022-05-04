import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportanciaPage } from './importancia.page';

const routes: Routes = [
  {
    path: '',
    component: ImportanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportanciaPageRoutingModule {}
