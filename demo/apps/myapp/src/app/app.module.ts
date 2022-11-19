import { CommonUiModule } from './../../../../libs/common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
