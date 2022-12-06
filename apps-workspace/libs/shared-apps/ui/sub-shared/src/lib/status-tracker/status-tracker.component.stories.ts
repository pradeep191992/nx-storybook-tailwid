
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StatusTrackerComponent } from './status-tracker.component';



export default {
  title: 'App Order Tracker',
  component: StatusTrackerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ],
} as Meta<StatusTrackerComponent>;

const Template: Story<StatusTrackerComponent> = (args: StatusTrackerComponent) => ({
  props: args,
});

export const OrderStatus = Template.bind({});

OrderStatus.args = {
  label: 'true',
  statusInfo: {
    statusArr: ['dads','dasd'],
    showTracker: true,
    showDate: false
  },
  statusDate: '2',
  responsiveClases: '',
  pendingStatusInfo: {
    showPendingText: true, 
    showWrappedReqAck: false
  },
  orderStatusLabel: 'order-card',
  showDateLabel: false,
  spacingClass: 'max-w-[72px] md:max-w-[342px] gap-[2px] md:gap-1.5'
}

// @Input() label!: string | undefined;
// @Input() statusInfo!: any;
// @Input() statusDate!: string;
// @Input() responsiveClases!: string;
// @Input() pendingStatusInfo!: { showPendingText: boolean, showWrappedReqAck: boolean; };
// @Input() orderStatusLabel = '';
// @Input() showDateLabel = false;
// @Input() querySearch = '';

export interface TrackerInfo {
  statusArr: string[];
  showTracker: boolean;
  showDate: boolean;
}