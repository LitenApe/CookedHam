import { Meta, Story } from '@storybook/react';
import Component, { LegendProps } from './Legend';

export default {
  title: 'Atom/Legend',
  component: Component,
} as Meta;

const Template: Story<LegendProps> = ({ children, ...args }) => (
  <Component {...args}>{children}</Component>
);

export const Legend = Template.bind({});
Legend.args = { ...Legend.args, children: "I'm a legend" };
