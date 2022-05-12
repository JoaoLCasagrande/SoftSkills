import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExemplosPage } from './exemplos.page';

const routes: Routes = [
  {
    path: '',
    component: ExemplosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosPageRoutingModule {}
