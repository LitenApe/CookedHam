import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Input as Component } from '.';
import { Field } from '../field';
import { Label } from '../label';

export default {
  title: 'Atom/Input',
  component: Component,
  argTypes: {
    as: {
      options: ['input', 'textarea'],
      control: { type: 'select' },
    },
    type: {
      options: [
        'date',
        'datetime-local',
        'email',
        'hidden',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Field>
    <Label>Input label</Label>
    <Component {...args} />
  </Field>
);

export const Input = Template.bind({});
Input.args = {
  ...Input.args,
  as: 'input',
  type: 'text',
  onChange: action('input change'),
};
