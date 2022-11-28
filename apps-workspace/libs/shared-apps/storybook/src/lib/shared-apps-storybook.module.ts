import { SharedAppsUiOrderCardModule } from './../../../ui/order-card/src/lib/shared-apps-ui-order-card.module';
import { SharedAppsUiHeaderModule } from './../../../ui/header/src/lib/shared-apps-ui-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedAppsUiHeaderModule,
    SharedAppsUiOrderCardModule
  ],
})
export class SharedAppsStorybookModule {}
