import { Story, Meta } from '@storybook/react';
import { Pkg, PkgProps } from './pkg';

export default {
  component: Pkg,
  title: 'Pkg',
} as Meta;

const Template: Story<PkgProps> = (args) => <Pkg {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Luis'
};
