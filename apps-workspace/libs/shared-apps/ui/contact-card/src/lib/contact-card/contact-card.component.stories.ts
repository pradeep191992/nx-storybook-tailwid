// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SharedAppsUiSubSharedModule } from 'libs/shared-apps/ui/sub-shared/src';

import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContactCardComponent } from './contact-card.component';

export default {
  title: 'App Contact Card',
  component: ContactCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedAppsUiSubSharedModule],
    })
  ],
} as Meta<ContactCardComponent>;

const Template: Story<ContactCardComponent> = (args: ContactCardComponent) => ({
  props: args,
});


export const Contact1 = Template.bind({});
export const Contact2 = Template.bind({});
export const Contact3 = Template.bind({});
export const Contact4 = Template.bind({});
export const Contact5 = Template.bind({});
export const Contact6 = Template.bind({});

Contact1.args = {
  imagePath: '',
  fullName: 'First and Last Name',
  role: 'Occupation Title',
  classNames: 'w-10 h-10 mr-2.5 text-16',
  activeCall: false,
  inTransit: false,
  isCallAble: true,
  isAdmin: false,
}
Contact2.args = {
  imagePath: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg',
  fullName: 'First and Last Name',
  role: 'Occupation Title',
  classNames: 'w-10 h-10 mr-2.5 text-16',
  activeCall: true,
  inTransit: false,
  isCallAble: true,
  isAdmin: false,
}
Contact3.args = {
  imagePath: '',
  fullName: 'First and Last Name',
  role: 'Occupation Title',
  classNames: 'w-10 h-10 mr-2.5 text-16',
  activeCall: false,
  inTransit: true,
  isCallAble: true,
  isAdmin: false,
}
Contact4.args = {
  imagePath: '',
  fullName: 'First and Last Name',
  role: 'Occupation Title',
  classNames: 'w-10 h-10 mr-2.5 text-16',
  activeCall: false,
  inTransit: false,
  isCallAble: false,
  isAdmin: false,
}
Contact5.args = {
  imagePath: '',
  fullName: 'First and Last Name',
  role: 'Occupation Title',
  classNames: 'w-10 h-10 mr-2.5 text-16',
  activeCall: false,
  inTransit: false,
  isCallAble: false,
  isAdmin: true,
}
Contact6.args = {
  imagePath: '',
  fullName: 'First and Last Name',
  role: 'Occupation Title',
  classNames: 'w-10 h-10 mr-2.5 text-16',
  activeCall: false,
  inTransit: true,
  isCallAble: false,
  isAdmin: false,
}
