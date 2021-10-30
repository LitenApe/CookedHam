import { Meta, Story } from '@storybook/react';
import { Checkbox as Component } from '.';
import { Field } from '../field';
import { Label } from '../label';

export default {
  title: 'Atom/Checkbox',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Field {...args}>
    <Component />
    <Label>Checkbox label</Label>
  </Field>
);

export const Checkbox = Template.bind({});
Checkbox.args = { ...Checkbox.args };
