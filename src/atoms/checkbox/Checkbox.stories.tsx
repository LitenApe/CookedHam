import { Meta, Story } from '@storybook/react';
import Component from './Checkbox';

export default {
  title: 'Atom/Checkbox',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = { ...Checkbox.args };
