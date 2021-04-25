import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {InfoboxComponent} from './infobox.component';

@NgModule({
  declarations: [
    InfoboxComponent
  ],
  imports: [
    RouterModule
  ],
  entryComponents: [InfoboxComponent],
  exports: [InfoboxComponent]
})
export class InfoboxModule {}
