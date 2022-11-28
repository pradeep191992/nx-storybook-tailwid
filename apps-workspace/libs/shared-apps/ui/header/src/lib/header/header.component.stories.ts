import { HeaderComponent } from './header.component';

import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'App Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

// const Template: Story<HeaderComponent & { label: string }> = ({
//   label,
//   title,
//   para,
//   ...props
// }) => ({
//   props,
//   template: `<HeaderComponent label="${label}">${label}</HeaderComponent>`,
// });

export const App1Header = Template.bind({});
export const App2Header = Template.bind({});
export const App3Header = Template.bind({});

App1Header.args = {
  title: 'Angular',
  para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
  link: 'https://angular.io'
}
App2Header.args = {
  title: 'Tailwind CSS',
  para: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  link: 'https://tailwindcss.com'
}
App3Header.args = {
  title: 'Nx',
  para: 'Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.',
  link: 'https://nx.dev'
}