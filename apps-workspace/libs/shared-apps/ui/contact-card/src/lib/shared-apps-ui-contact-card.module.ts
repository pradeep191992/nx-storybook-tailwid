import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { UserInitialsComponent } from './user-initials/user-initials.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactCardComponent, UserInitialsComponent],
  exports: [ContactCardComponent, UserInitialsComponent],
})
export class SharedAppsUiContactCardModule {}
