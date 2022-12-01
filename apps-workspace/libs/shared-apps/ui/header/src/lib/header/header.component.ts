import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() notificationClick = new EventEmitter();
  @Output() profileClick = new EventEmitter();

  countClass = '';
  constructor() {}

  ngOnInit(): void {
    this.countClass = this.notificationCount ? 'px-2 py-1 rounded-2xl gap-1' : 'w-8 h-8 rounded-full';
  }

  openProfileDropdown() {
    console.log('Profile Click')
    this.profileClick.emit()
  }

  openNotificationPanel() {
    console.log('Notification Click')
    this.profileClick.emit()
  }

}
