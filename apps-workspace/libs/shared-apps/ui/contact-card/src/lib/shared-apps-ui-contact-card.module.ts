// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SharedAppsUiSubSharedModule } from 'libs/shared-apps/ui/sub-shared/src';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAppsUiSubSharedModule
  ],
  declarations: [ContactCardComponent],
  exports: [ContactCardComponent],
})
export class SharedAppsUiContactCardModule {}
