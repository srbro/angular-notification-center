import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {InfoboxModule} from '../../components/molecules/infobox/infobox.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    InfoboxModule
  ],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
