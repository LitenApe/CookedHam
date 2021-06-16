import { Story } from '@storybook/react';
import Component from '../FormControl';

import Label from '../Label';
import Input from '../Input';

export default {
  title: 'Form',
  component: Component,
};

const Template: Story<{ label: string }> = ({ label }) => (
  <Component>
    <Label>{label}</Label>
    <Input />
  </Component>
);

export const FormControl = Template.bind({});
FormControl.args = { ...FormControl.args, label: "I'm a label" };
