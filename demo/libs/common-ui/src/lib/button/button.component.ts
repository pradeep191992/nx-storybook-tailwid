import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() href?: string;
}
