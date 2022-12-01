import { SkeletonComponent } from './skeleton.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SharedAppsUiSubSharedModule } from 'libs/shared-apps/ui/sub-shared/src';
import { moduleMetadata, Story, Meta } from '@storybook/angular';



export default {
  title: 'App Skeleton',
  component: SkeletonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedAppsUiSubSharedModule],
    })
  ],
} as Meta<SkeletonComponent>;

const Template: Story<SkeletonComponent> = (args: SkeletonComponent) => ({
  props: args,
});

export const OrderCardSkeleton = Template.bind({});
export const ContactCardSkeleton = Template.bind({});
export const FormCardSkeleton = Template.bind({});
export const TitleParaTextSkeleton = Template.bind({});
export const HeadingAndSubHeadingTextSkeleton = Template.bind({});

OrderCardSkeleton.args = {
  orderCardSkeleton: true,
  orderCard: true,
  skeletonCount: 2,
  className: 'order-card'
}

ContactCardSkeleton.args = {
  orderCardSkeleton: true,
  orderCard: true,
  skeletonCount: 2,
  className: 'contact-card'
}

HeadingAndSubHeadingTextSkeleton.args = {
  orderCardSkeleton: true,
  orderCard: false,
  skeletonCount: 1,
  className: 'heading-subheading'
}

FormCardSkeleton.args = {
  formCardSkeleton: true,
  skeletonCount: 2,
  className: 'form-card'
}

TitleParaTextSkeleton.args = {
  titleParaTextSkeleton: true,
  skeletonCount: 1,
  className: 'text-and-para'
}