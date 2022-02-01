import { Story, Meta } from '@storybook/react';
import { BasicComponent, BasicComponentProps } from './basic-component';

export default {
  component: BasicComponent,
  title: 'BasicComponent',
} as Meta;

const Template: Story<BasicComponentProps> = (args) => (
  <BasicComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello Component'
};
