import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-infobox',
  styleUrls: ['./infobox.component.scss'],
  templateUrl : './infobox.component.html'
})
export class InfoboxComponent {
  @Input() title: string;

  closeBox() {
    const information = document.getElementsByClassName('infobox')[0] as HTMLElement;
    information.style.display = 'none';
  }
}
