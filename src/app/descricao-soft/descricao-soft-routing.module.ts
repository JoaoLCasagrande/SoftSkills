import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescricaoSoftPage } from './descricao-soft.page';

const routes: Routes = [
  {
    path: '',
    component: DescricaoSoftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescricaoSoftPageRoutingModule {}
