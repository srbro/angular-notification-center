import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  styleUrls: ['./button.component.scss'],
  templateUrl : './button.component.html'
})
export class ButtonComponent {
  @Input() label: string;
  @Input() url: string;
  @Input() target: string;
}
