import { Meta, Story } from '@storybook/react';
import Component, { ButtonProps } from './Button';

export default {
  title: 'Atom/Misc',
  component: Component,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = { ...Button.args, children: 'label' };
