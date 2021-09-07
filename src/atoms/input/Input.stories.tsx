import { Meta, Story } from '@storybook/react';

import Component, { InputProps } from './Input';

export default {
  title: 'Atom/Form',
  component: Component,
} as Meta;

const Template: Story<InputProps> = (args) => <Component {...args} />;

export const Input = Template.bind({});
Input.args = { ...Input.args };
