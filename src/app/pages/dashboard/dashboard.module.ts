import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {InfoboxModule} from '../../components/molecules/infobox/infobox.module';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    InfoboxModule,
    CommonModule
  ],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
