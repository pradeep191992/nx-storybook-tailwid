import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card/order-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderCardComponent],
  exports: [OrderCardComponent],
})
export class SharedAppsUiOrderCardModule {}
