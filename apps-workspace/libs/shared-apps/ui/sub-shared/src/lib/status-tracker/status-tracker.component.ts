import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-status-tracker',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss'],
})
export class StatusTrackerComponent implements OnInit {
  @Input() label!: string | undefined;
  @Input() statusInfo!: any;
  @Input() statusDate!: string;
  @Input() responsiveClases!: string;
  @Input() pendingStatusInfo!: { showPendingText: boolean, showWrappedReqAck: boolean; };
  @Input() orderStatusLabel = '';
  @Input() showDateLabel = false;
  @Input() querySearch = '';
  @Input() spacingClass!: string;

  constructor() {}

  ngOnInit(): void {}
}
