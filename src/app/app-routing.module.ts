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
  },
  {
    path: 'mostra-carros',
    loadChildren: () => import('./mostra-carros/mostra-carros.module').then( m => m.MostraCarrosPageModule)
  },
  {
    path: 'mostra-ganho',
    loadChildren: () => import('./mostra-ganho/mostra-ganho.module').then( m => m.MostraGanhoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
