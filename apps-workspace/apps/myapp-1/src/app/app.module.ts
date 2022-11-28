import { SharedAppsUiOrderCardModule } from './../../../../libs/shared-apps/ui/order-card/src/lib/shared-apps-ui-order-card.module';
import { SharedAppsUiHeaderModule } from './../../../../libs/shared-apps/ui/header/src/lib/shared-apps-ui-header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedAppsUiHeaderModule,
    SharedAppsUiOrderCardModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
