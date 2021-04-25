import { NgModule } from '@angular/core';
import {AccordionComponent} from './accordion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    MatExpansionModule,
    CommonModule
  ],
  entryComponents: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule {}
