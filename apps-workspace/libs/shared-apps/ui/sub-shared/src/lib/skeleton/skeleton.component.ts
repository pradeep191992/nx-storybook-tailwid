import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-workspace-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() orderCardSkeleton!: boolean;
  @Input() orderCard!: boolean;
  @Input() formCardSkeleton!: boolean;
  @Input() titleParaTextSkeleton!: boolean;
  @Input() className!: string;
  @Input() set skeletonCount(val: number){
    this.skeletonCountArr = new Array(val)
  }
  skeletonCountArr = new Array(2);
  constructor() {}

  ngOnInit(): void {}
}
