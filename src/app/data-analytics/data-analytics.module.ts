import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataAnalyticsPageRoutingModule } from './data-analytics-routing.module';

import { DataAnalyticsPage } from './data-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataAnalyticsPageRoutingModule
  ],
  declarations: [DataAnalyticsPage]
})
export class DataAnalyticsPageModule {}
