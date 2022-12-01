import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { SharedAppsUiSubSharedModule } from './../../../../sub-shared/src/lib/shared-apps-ui-sub-shared.module';
import { HeaderComponent } from './header.component';


export default {
  title: 'App Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedAppsUiSubSharedModule],
    })
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const HeaderOption1 = Template.bind({});
export const HeaderOption2 = Template.bind({});
export const HeaderOption3 = Template.bind({});

HeaderOption1.args = {
  slbLogo: '/assets/slb-icons/slb-logo.svg',
  userName: 'Pradeep Saini',
  backButton: false,
  showNotification: true,
}
HeaderOption2.args = {
  slbLogo: '/assets/slb-icons/slb-logo.svg',
  userName: 'Test User',
  backButton: true,
  showNotification: false,
}
HeaderOption3.args = {
  slbLogo: '/assets/slb-icons/slb-logo.svg',
  userName: 'John Deo',
  notificationCount: 22,
  backButton: false,
  showNotification: true,
}