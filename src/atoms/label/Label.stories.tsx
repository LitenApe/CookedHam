import { Meta, Story } from '@storybook/react';
import { Label as Component } from '.';

export default {
  title: 'Atom/Label',
  component: Component,
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <Component {...args}>{children}</Component>
);

export const Label = Template.bind({});
Label.args = { ...Label.args, children: "I'm a label" };
