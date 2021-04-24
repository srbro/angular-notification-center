import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {ButtonModule} from '../../components/atoms/link-button/button.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ButtonModule
  ],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
