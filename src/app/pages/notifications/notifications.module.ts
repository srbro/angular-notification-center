import { NgModule } from '@angular/core';
import {NotificationsComponent} from './notifications.component';
import {AccordionModule} from "../../components/molecules/accordion/accordion.module";

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    AccordionModule
  ],
  entryComponents: [NotificationsComponent],
  exports: [NotificationsComponent]
})
export class NotificationsModule {}
