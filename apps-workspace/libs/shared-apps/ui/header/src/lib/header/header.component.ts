import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() userName!: string;
  @Input() backButton!: boolean;
  @Input() slbLogo!: string;
  @Input() notificationCount!: number | undefined;
  @Input() showNotification!: boolean;

  countClass = '';
  constructor() {}

  ngOnInit(): void {
    this.countClass = this.notificationCount ? 'px-2 py-1 rounded-2xl gap-1' : 'w-8 h-8 rounded-full';
  }
}
