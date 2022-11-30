
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SharedAppsUiSubSharedModule } from 'libs/shared-apps/ui/sub-shared/src';
import { SharedAppsUiContactCardModule } from '@apps-workspace/shared-apps/ui/contact-card';
import { SharedAppsUiHeaderModule } from '@apps-workspace/shared-apps/ui/header';
import { SharedAppsUiOrderCardModule } from '@apps-workspace/shared-apps/ui/order-card';

@NgModule({
  imports: [
    CommonModule,
    SharedAppsUiHeaderModule,
    SharedAppsUiOrderCardModule,
    SharedAppsUiContactCardModule,
    SharedAppsUiSubSharedModule
  ],
})
export class SharedAppsStorybookModule {}
