import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInitialsComponent } from './user-initials/user-initials.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [SvgIconComponent, UserInitialsComponent, SkeletonComponent],
  imports: [CommonModule],
  exports: [SvgIconComponent, UserInitialsComponent, SkeletonComponent],
})
export class SharedAppsUiSubSharedModule {}
