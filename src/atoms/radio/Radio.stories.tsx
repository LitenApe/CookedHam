import { Meta, Story } from '@storybook/react';
import Component from './Radio';

export default {
  title: 'Atom/Radio',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Radio = Template.bind({});
Radio.args = { ...Radio.args };
