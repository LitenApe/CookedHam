import { Meta, Story } from '@storybook/react';
import { Radio as Component } from '.';
import { Field } from '../field';
import { Label } from '../label';

export default {
  title: 'Atom/Radio',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Field {...args}>
    <Component />
    <Label>Radio label</Label>
  </Field>
);

export const Radio = Template.bind({});
Radio.args = { ...Radio.args };
