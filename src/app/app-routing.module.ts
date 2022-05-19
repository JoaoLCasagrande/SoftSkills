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
  {
    path: 'exemplos',
    loadChildren: () => import('./exemplos/exemplos.module').then( m => m.ExemplosPageModule)
  },
  {
    path: 'avaliar',
    loadChildren: () => import('./avaliar/avaliar.module').then( m => m.AvaliarPageModule)
  },
  {
    path: 'diferencas',
    loadChildren: () => import('./diferencas/diferencas.module').then( m => m.DiferencasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
