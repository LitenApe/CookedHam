import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Input as Component } from '.';

export default {
  title: 'Atom/Input',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Input = Template.bind({});
Input.args = {
  ...Input.args,
  value: 'Shapes of Water',
  onChange: action('input change'),
};
