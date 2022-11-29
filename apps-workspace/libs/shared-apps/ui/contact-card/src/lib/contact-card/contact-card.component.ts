import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() fullName!: string;
  @Input() role!: string;
  @Input() para!: string;
  @Input() imagePath!: string;
  @Input() userName!: string;
  @Input() classNames!: string;
  
  constructor() {}

  ngOnInit(): void {}
}
