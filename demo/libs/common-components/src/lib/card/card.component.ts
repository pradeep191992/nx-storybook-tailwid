import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() title?: string
  @Input() para?: string
  @Input() link?: string
  @Input() btnStyle = 'slb-btn slb-btn-blue';
}
