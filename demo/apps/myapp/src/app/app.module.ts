import { SharedComponentsModule } from './../../../../libs/shared/components/src/lib/shared-components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponentModule } from 'libs/shared/components/src/lib/button/button.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    ButtonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
