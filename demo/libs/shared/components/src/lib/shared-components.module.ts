import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentModule } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonComponentModule
  ],
})
export class SharedComponentsModule {}
