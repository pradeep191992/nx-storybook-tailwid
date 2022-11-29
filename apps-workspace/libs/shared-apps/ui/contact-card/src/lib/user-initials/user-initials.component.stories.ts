
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

UserInitial.args = {
  imagePath: '',
  userName: 'User name 1',
  classNames: 'w-8 h-8 mr-2.5 text-sm'
}
UserInitialWithImg.args = {
  imagePath: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg',
  userName: '',
  classNames: 'w-8 h-8 mr-2.5 bg-red-600'
}
UserInitialForEmp.args = {
  imagePath: '',
  userName: 'User name 4',
  classNames: 'w-8 h-8 mr-2.5 text-sm'
}
