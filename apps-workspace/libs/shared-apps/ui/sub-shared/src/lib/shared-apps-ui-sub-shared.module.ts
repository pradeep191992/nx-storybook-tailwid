import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInitialsComponent } from './user-initials/user-initials.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { StatusTrackerComponent } from './status-tracker/status-tracker.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    UserInitialsComponent,
    SkeletonComponent,
    StatusTrackerComponent,
  ],
  imports: [CommonModule],
  exports: [
    SvgIconComponent, 
    UserInitialsComponent, 
    SkeletonComponent,
    StatusTrackerComponent
  ],
})
export class SharedAppsUiSubSharedModule {}
