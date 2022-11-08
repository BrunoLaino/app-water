import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorAguaPageRoutingModule } from './monitor-agua-routing.module';

import { MonitorAguaPage } from './monitor-agua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorAguaPageRoutingModule
  ],
  declarations: [MonitorAguaPage]
})
export class MonitorAguaPageModule {}
