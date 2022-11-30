import { SharedAppsUiSubSharedModule } from './../../../sub-shared/src/lib/shared-apps-ui-sub-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAppsUiSubSharedModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class SharedAppsUiHeaderModule {}
