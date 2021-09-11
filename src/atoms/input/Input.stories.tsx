import { Meta, Story } from '@storybook/react';

import Component from './Input';

export default {
  title: 'Atom/Input',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Input = Template.bind({});
Input.args = { ...Input.args, value: 'Shapes of Water' };
