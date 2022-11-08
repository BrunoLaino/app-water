import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorAguaPage } from './monitor-agua.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorAguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorAguaPageRoutingModule {}
