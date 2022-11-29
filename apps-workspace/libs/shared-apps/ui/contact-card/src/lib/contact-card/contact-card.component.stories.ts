import { UserInitialsComponent } from './../user-initials/user-initials.component';

import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContactCardComponent } from './contact-card.component';

export default {
  title: 'App Contact Card',
  component: ContactCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [UserInitialsComponent],
      imports: [],
    })
  ],
} as Meta<ContactCardComponent>;

const Template: Story<ContactCardComponent> = (args: ContactCardComponent) => ({
  props: args,
});


export const AppCard1 = Template.bind({});
export const AppCard2 = Template.bind({});
export const AppCard3 = Template.bind({});

AppCard1.args = {
  imagePath: '',
  userName: '',
  fullName: 'User name 1',
  role: 'Frontend Developer',
  classNames: 'bg-slb-orange-400 w-8 h-8 mr-2.5 text-14',
  para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
}
AppCard2.args = {
  imagePath: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg',
  userName: '',
  fullName: 'User name 2',
  role: 'Angular Developer',
  classNames: 'w-8 h-8 mr-2.5 text-14',
  para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
}
AppCard3.args = {
  imagePath: '',
  userName: 'User name 3',
  fullName: 'User name 3',
  role: 'React Developer',
  classNames: 'w-8 h-8 mr-2.5 text-14',
  para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
}
