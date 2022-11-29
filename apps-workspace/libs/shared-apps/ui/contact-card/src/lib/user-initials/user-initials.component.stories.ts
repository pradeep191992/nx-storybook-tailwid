
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UserInitialsComponent } from './user-initials.component';

export default {
  title: 'App User Initials',
  component: UserInitialsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<UserInitialsComponent>;

const Template: Story<UserInitialsComponent> = (args: UserInitialsComponent) => ({
  props: args,
});


export const UserInitial = Template.bind({});
export const UserInitialWithImg = Template.bind({});
export const UserInitialForEmp = Template.bind({});
export const SizeSmall = Template.bind({});
export const SizeMedium = Template.bind({});
export const SizeLarge = Template.bind({});
export const SizeXLarge = Template.bind({});
export const SizeXXLarge = Template.bind({});


SizeSmall.args = {
  imagePath: '',
  userName: 'Pradeep Saini',
  classNames: 'w-8 h-8 text-14 bg-slb-gray-300'
}
SizeMedium.args = {
  imagePath: '',
  userName: 'Pradeep Saini',
  classNames: 'w-14 h-14 text-19 bg-slb-gray-300'
}
SizeLarge.args = {
  imagePath: '',
  userName: 'Pradeep Saini',
  classNames: 'w-20 h-20 text-[30px] bg-slb-gray-300'
}
SizeXLarge.args = {
  imagePath: '',
  userName: 'Pradeep Saini',
  classNames: 'w-32 h-32 text-[50px] bg-slb-gray-300'
}
SizeXXLarge.args = {
  imagePath: '',
  userName: 'Pradeep Saini',
  classNames: 'w-40 h-40 text-[80px] bg-slb-gray-300'
}

UserInitial.args = {
  imagePath: '',
  userName: '',
  classNames: 'w-8 h-8 mr-2.5 text-14 bg-slb-gray-300'
}
UserInitialWithImg.args = {
  imagePath: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg',
  userName: '',
  classNames: 'w-8 h-8 mr-2.5 '
}
UserInitialForEmp.args = {
  imagePath: '',
  userName: 'User name 4',
  classNames: 'w-8 h-8 mr-2.5 text-14 bg-slb-orange-400'
}

