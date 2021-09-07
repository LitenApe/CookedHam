import { Meta, Story } from '@storybook/react';

import Component, { LabelProps } from './Label';

export default {
  title: 'Atom/Form',
  component: Component,
} as Meta;

const Template: Story<LabelProps> = ({ children, ...args }) => (
  <Component {...args}>{children}</Component>
);

export const Label = Template.bind({});
Label.args = { ...Label.args, children: "I'm a label" };
