import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitor/Monitor de água',
    pathMatch: 'full'
  },
  {
    path: 'monitor/:id',
    loadChildren: () => import('./monitor-agua/monitor-agua.module').then( m => m.MonitorAguaPageModule)
  }
];

  @NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
