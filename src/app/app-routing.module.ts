import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'descricao-soft',
    loadChildren: () => import('./descricao-soft/descricao-soft.module').then( m => m.DescricaoSoftPageModule)
  },
  {
    path: 'demandadas',
    loadChildren: () => import('./demandadas/demandadas.module').then( m => m.DemandadasPageModule)
  },
  {
    path: 'importancia',
    loadChildren: () => import('./importancia/importancia.module').then( m => m.ImportanciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
