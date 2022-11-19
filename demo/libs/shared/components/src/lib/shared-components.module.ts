import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentModule } from './button/button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, ButtonComponentModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedComponentsModule {}
