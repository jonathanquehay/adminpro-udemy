import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarSpecComponent } from './sidebar--spec/sidebar--spec.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     NopagefoundComponent,
     HeaderComponent,
     SidebarSpecComponent,
     BreadcrumsComponent
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarSpecComponent,
    BreadcrumsComponent
  ]
})
export class SharedModule { }
