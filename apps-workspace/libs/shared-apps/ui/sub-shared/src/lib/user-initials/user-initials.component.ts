import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-user-initials',
  templateUrl: './user-initials.component.html',
  styleUrls: ['./user-initials.component.scss'],
})
export class UserInitialsComponent implements OnInit {
  constructor() {}

  shortName = '';
  @Input() userName!: string | undefined;
  @Input() imagePath!: string;
  @Input() classNames!: string;

  ngOnInit(): void {
    this.setUserShortName();
  }
  setUserShortName() {
    const fullName = this.getCleanFullName();
    if (fullName?.length) {
      const initialIndex = 0;
      const descrimentBy = 1;
      const first = fullName[initialIndex];
      const last = fullName[fullName?.length - descrimentBy];
      this.shortName = (first ? first.charAt(0)?.toUpperCase() : '') + (last ? last.charAt(0)?.toUpperCase() : '');
    }
  }
  getCleanFullName(): Array<string> | undefined {
    return this.userName?.trim()?.split(' ');
  }
}
