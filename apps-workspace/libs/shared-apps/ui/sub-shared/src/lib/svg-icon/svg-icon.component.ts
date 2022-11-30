import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit, OnChanges {
  @Input() iconHashTag: string | undefined;
  svgIconPath = '/assets/slb-icons/slb-icon.svg#';
  svgHashTag = '';

  ngOnInit(): void {
    this.svgHashTag = `${this.svgIconPath}${this.iconHashTag}`;
  }
  ngOnChanges(): void {
     if(this.iconHashTag) {
        this.svgHashTag = `${this.svgIconPath}${this.iconHashTag}`;
     }
  }
}
