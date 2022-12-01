import { SharedAppsUiOrderCardModule } from '@apps-workspace/shared-apps/ui/order-card';
import { SharedAppsUiHeaderModule } from '@apps-workspace/shared-apps/ui/header';
import { SharedAppsUiContactCardModule } from '@apps-workspace/shared-apps/ui/contact-card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedAppsUiContactCardModule,
    SharedAppsUiHeaderModule,
    SharedAppsUiOrderCardModule,
    
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
