import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  styleUrls: ['./accordion.component.scss'],
  templateUrl : './accordion.component.html'
})
export class AccordionComponent {
  @Input() data: object[];
}
