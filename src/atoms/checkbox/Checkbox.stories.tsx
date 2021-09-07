import { Story } from '@storybook/react';
import Component, { CheckboxProps } from './Checkbox';

export default {
  title: 'Atom/Form',
  component: Component,
};

const Template: Story<CheckboxProps> = (args) => <Component {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = { ...Checkbox.args };
