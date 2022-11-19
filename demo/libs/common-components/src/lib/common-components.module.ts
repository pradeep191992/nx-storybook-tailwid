import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FloatingNavbarComponent } from './floating-navbar/floating-navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent, 
    HeaderComponent, 
    FloatingNavbarComponent
  ],
  exports: [
    CardComponent, 
    HeaderComponent, 
    FloatingNavbarComponent
  ],
})
export class CommonComponentsModule {}
