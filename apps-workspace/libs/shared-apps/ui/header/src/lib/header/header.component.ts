import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  @Input() para?: string;
  @Input() link?: string;
  @Input() slbLogo!: string;
  constructor() {}

  ngOnInit(): void {}
}
