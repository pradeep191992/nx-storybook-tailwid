import { CardComponent } from './card.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

// const Template: Story<CardComponent & { label: string }> = ({
//   label,
//   title,
//   para,
//   ...props
// }) => ({
//   props,
//   template: `<demo-card label="${label}">${label}</demo-card>`,
// });

export const Angular = Template.bind({});
export const Tailwind = Template.bind({});
export const Nx = Template.bind({});

Angular.args = {
  title: 'Angular',
  para: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
  link: 'https://angular.io'
}
Tailwind.args = {
  title: 'Tailwind CSS',
  para: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  link: 'https://tailwindcss.com'
}
Nx.args = {
  title: 'Nx',
  para: 'Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.',
  link: 'https://nx.dev'
}