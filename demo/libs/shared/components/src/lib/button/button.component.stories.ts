import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  // template: `<demo-button>${this.label}</demo-button>`
});


export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button'
}