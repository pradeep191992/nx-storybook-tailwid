import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AttachmentCardComponent } from './attachment-card.component';



export default {
  title: 'Attachment Card',
  component: AttachmentCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ],
} as Meta<AttachmentCardComponent>;

const Template: Story<AttachmentCardComponent> = (args: AttachmentCardComponent) => ({
  props: args,
});

export const OrderCardSkeleton = Template.bind({});

OrderCardSkeleton.args = {
  // orderCardSkeleton: true,
  // orderCard: true,
  // skeletonCount: 2,
  // className: 'order-card'
}
