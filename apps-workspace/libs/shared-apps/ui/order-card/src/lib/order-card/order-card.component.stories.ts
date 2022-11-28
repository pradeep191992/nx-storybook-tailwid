import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { OrderCardComponent } from './order-card.component';

export default {
  title: 'App Orders',
  component: OrderCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<OrderCardComponent>;

const Template: Story<OrderCardComponent> = (args: OrderCardComponent) => ({
  props: args,
});


export const App1Order = Template.bind({});
export const App2Order = Template.bind({});
export const App3Order = Template.bind({});

App1Order.args = {
  title: 'Angular',
  para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
  link: 'https://angular.io'
}
App2Order.args = {
  title: 'Tailwind CSS',
  para: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  link: 'https://tailwindcss.com'
}
App3Order.args = {
  title: 'Nx',
  para: 'Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.',
  link: 'https://nx.dev'
}