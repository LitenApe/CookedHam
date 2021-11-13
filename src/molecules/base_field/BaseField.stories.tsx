import { Meta, Story } from '@storybook/react';
import { BaseField as Component } from '.';
import { Input } from '../../atoms/input';
import { Label } from '../../atoms/label';

export default {
  title: 'Molecule/BaseField',
  component: Component,
  parameters: {
    componentSubtitle:
      'An element which enable users to trigger events and actions',
    docs: {
      description: {
        component: `
    The button is the most commonly used element for triggering actions
    and events, such as submitting a form, opening a dialog, canceling
    an action, and so on.
        `,
      },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'The accessible name and the content of the button',
      type: 'string',
    },
  },
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
