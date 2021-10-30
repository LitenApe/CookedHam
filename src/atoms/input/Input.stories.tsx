import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Input as Component } from '.';
import { Field } from '../field';
import { Label } from '../label';

export default {
  title: 'Atom/Input',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Field {...args}>
    <Label>Input label</Label>
    <Component />
  </Field>
);

export const Input = Template.bind({});
Input.args = {
  ...Input.args,
  value: 'Shapes of Water',
  onChange: action('input change'),
};
