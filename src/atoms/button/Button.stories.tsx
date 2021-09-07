import { Story } from '@storybook/react';
import Component, { ButtonProps } from './Button';

export default {
  title: 'Atom/Misc',
  component: Component,
};

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <Component {...args}>{children}</Component>
);

export const Button = Template.bind({});
Button.args = { ...Button.args, children: 'label' };
