import { Story } from '@storybook/react';
import Component from '../FormControl';

import Label from '../Label';
import TextField from '../TextField';

export default {
  title: 'Form',
  component: Component,
};

const Template: Story<{ label: string }> = ({ label }) => (
  <Component>
    <Label>{label}</Label>
    <TextField />
  </Component>
);

export const FormControl = Template.bind({});
FormControl.args = { ...FormControl.args, label: "I'm a label" };
