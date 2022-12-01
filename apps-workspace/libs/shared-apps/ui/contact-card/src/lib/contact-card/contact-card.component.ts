import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() fullName!: string;
  @Input() role!: string;
  @Input() imagePath!: string;
  @Input() classNames!: string;
  @Input() isCallAble!: boolean;
  @Input() activeCall!: boolean;
  @Input() inTransit!: boolean;
  @Input() isAdmin!: boolean;
  
  callIcon = '';
  constructor() {}

  ngOnInit(): void {
    this.callIcon = this.activeCall ? 'active_call_icon' : 'call_icon';
  }
}
