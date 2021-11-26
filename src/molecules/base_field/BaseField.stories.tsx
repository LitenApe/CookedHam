import { Meta, Story } from '@storybook/react';
import { BaseField as Component } from '.';
import { Input } from '../../atoms/input';
import { Label } from '../../atoms/label';

export default {
  title: 'Molecule/BaseField',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Component {...args}>
    <Label>Test Label</Label>
    <Input />
  </Component>
);

export const BaseField = Template.bind({});
BaseField.storyName = 'BaseField';
BaseField.args = {
  ...BaseField.args,
  error: '',
};
