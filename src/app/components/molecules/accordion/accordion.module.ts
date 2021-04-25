import { NgModule } from '@angular/core';
import {AccordionComponent} from './accordion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "../../atoms/button/button.module";

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    MatExpansionModule,
    CommonModule,
    ButtonModule
  ],
  entryComponents: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule {}
