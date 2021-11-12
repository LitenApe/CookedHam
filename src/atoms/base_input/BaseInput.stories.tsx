import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { BaseInput as Component } from '.';
import { Field } from '../field';
import { Label } from '../label';

export default {
  title: 'Atom/BaseInput',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Field {...args}>
    <Label>Input label</Label>
    <Component />
  </Field>
);

export const BaseInput = Template.bind({});
BaseInput.storyName = 'BaseInput';
BaseInput.args = {
  ...BaseInput.args,
  value: 'Shapes of Water',
  error: '',
  onChange: action('input change'),
};
