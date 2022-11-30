import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInitialsComponent } from './user-initials/user-initials.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    UserInitialsComponent
  ],
  imports: [CommonModule],
  exports: [
    SvgIconComponent,
    UserInitialsComponent
  ],
})
export class SharedAppsUiSubSharedModule {}
