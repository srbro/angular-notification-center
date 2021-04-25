import {Component, Input} from '@angular/core';
import {convertToValidDate} from '../../../services/utils.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-accordion',
  styleUrls: ['./accordion.component.scss'],
  templateUrl : './accordion.component.html'
})
export class AccordionComponent {
  @Input() data: object[];

  convertDate(date: string) {
    const validDate = convertToValidDate(date);
    return dayjs(validDate).format('DD.MM.YYYY');
  }

  deleteNotification(id: string) {
    const element = document.getElementById(id) as HTMLElement;
    element.style.display = 'none';
  }
}
