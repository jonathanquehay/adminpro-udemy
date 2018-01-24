import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//temporal

//ng2-charts
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({

  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
  ],
  exports: [
    DashboardComponent,
    Graficas1Component
  ],
  imports : [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule { }
