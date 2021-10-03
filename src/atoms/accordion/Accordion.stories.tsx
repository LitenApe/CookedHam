import { Meta, Story } from '@storybook/react';
import { Accordion as Component } from '.';

export default {
  title: 'Atom/Accordion',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Accordion = Template.bind({});
Accordion.args = {
  ...Accordion.args,
  children: [
    <Component.Header key="accordion_title">Title</Component.Header>,
    <Component.Panel key="accordion_content">lorem ipsum</Component.Panel>,
  ],
};
