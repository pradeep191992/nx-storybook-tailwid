import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() title?: string
  @Input() para?: string
  @Input() link?: string
  constructor() {}

  ngOnInit(): void {}
}
